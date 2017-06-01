import { RECEIVE_ARTICLES } from '../actions/ArticleActions';

export default (state = [], action) => {
  switch(action.type) {
    case RECEIVE_ARTICLES:
      return action.allArticles.data.articles;
    default:
      return state;
  }
};
