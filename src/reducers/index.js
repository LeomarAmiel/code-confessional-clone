import { combineReducers } from 'redux'; 
import feedReducer from './feedReducer';
import confessReducer from './confessReducer';

export default combineReducers({
	feed: feedReducer,
	confess: confessReducer
});