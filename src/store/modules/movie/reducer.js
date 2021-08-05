import {
  GET_MOVIE_LIST,
  GET_MOVIE_DETAIL,
  CLEAR_MOVIE_STATE
} from '../action-types';

const initialState = {
  list: [],
  detail: {},
  pagination: {}
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_MOVIE_LIST:
      const {list, pagination} = action.payload;
      return {...state, list: list, pagination: pagination}
    case GET_MOVIE_DETAIL:
      return {...state, detail: action.payload}
    case CLEAR_MOVIE_STATE:
      return initialState;
    default:
      return state;
  }
}

export default reducer;
