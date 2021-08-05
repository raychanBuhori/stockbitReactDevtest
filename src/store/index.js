import {createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';
import {loadState, saveState} from '../utils/localStorage';
import reducer from './modules/combineReducer';

const persistedState = loadState();
const store = createStore(reducer, persistedState, applyMiddleware(reduxThunk));

store.subscribe(() => {
	saveState({
		movie: store.getState().movie
	});
});


export default store;
