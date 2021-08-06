import {combineReducers} from 'redux';

import movieReducer from './movie/reducer';
import currentReducer from './currentValue/reducer';

const reducer = combineReducers({
	movie: movieReducer,
	current: currentReducer
});

export default reducer;
