import {combineReducers} from 'redux';

import movieReducer from './movie/reducer';

const reducer = combineReducers({
	movie: movieReducer
});

export default reducer;
