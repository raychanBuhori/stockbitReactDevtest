import {
  GET_MOVIE_LIST,
  GET_MOVIE_DETAIL,
  CLEAR_MOVIE_STATE,
  SUCCESS,
  FAILED
} from '../action-types';
import axios from 'axios';

export const getMovieList = ({title = '', page = 1}) => async dispatch => {
  await dispatch({type: CLEAR_MOVIE_STATE});
  await axios({
    method: 'GET',
    url: `http://www.omdbapi.com/?apikey=394df02c&s=${title}&page=${page}`,
  }).then(resp => {
    const {Response, Search, totalResults} = resp.data;
    if(Response) {
      const paging = {currentPage: page, totalPage: Math.ceil(totalResults / 10)}
      return dispatch({type: GET_MOVIE_LIST, payload: {list: Search, pagination: paging}});
    } else {
      return dispatch({type: FAILED})
    }
  }).catch(error => {
    console.log(error);
    return dispatch({type: FAILED})
  })
}

export const getMovieDetail = ({id = ''}) => async dispatch => {
  await dispatch({type: CLEAR_MOVIE_STATE});
  await axios({
    method: 'GET',
    url: `http://www.omdbapi.com/?apikey=394df02c&i=${id}&plot=full&r=json`,
  }).then(resp => {
    const {data} = resp;
    if(data) {
      return dispatch({type: GET_MOVIE_DETAIL, payload: data});
    }
    return dispatch({type: FAILED});
  }).catch(error => {
    console.log(error);
    return dispatch({type: FAILED});
  })
}