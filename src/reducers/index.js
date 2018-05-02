import { combineReducers } from 'redux'; 
import feedReducer from './feedReducer';
import feedCategoryReducer from './feedCategoryReducer';
import confessReducer from './confessReducer';

export default combineReducers({
	feed: feedReducer,
	feedCategory: feedCategoryReducer,
	confess: confessReducer
});