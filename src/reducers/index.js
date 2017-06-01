import { combineReducers } from 'redux';
import ChannelsReducer from './ChannelsReducer';
import ArticlesReducer from './ArticlesReducer';

export default combineReducers({
  channels: ChannelsReducer,
  articles: ArticlesReducer
});
