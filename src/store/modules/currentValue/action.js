import {
  SET_CURRENT_MOVIE
} from '../action-types';

export const setCurrentMovie = id => async dispatch => {
  return dispatch({type: SET_CURRENT_MOVIE, payload: id});
}