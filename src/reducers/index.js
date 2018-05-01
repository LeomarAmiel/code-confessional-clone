import { combineReducers } from 'redux'; 
import feedReducer from './feedReducer';
import feedCategoryReducer from './feedCategoryReducer';

export default combineReducers({
	feed: feedReducer,
	feedCategory: feedCategoryReducer,
});