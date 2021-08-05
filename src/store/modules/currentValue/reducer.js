import {
  SET_CURRENT_MOVIE
} from '../action-types';

const initialState ={
  currentMovie: ''
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_CURRENT_MOVIE:
      return {...state, currentMovie: action.payload}
    default:
      return state;
  }
}

export default reducer;