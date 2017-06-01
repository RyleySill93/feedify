export const RECEIVE_ARTICLES = 'RECEIVE_ARTICLES';
import { getArticles } from '../util/ArticleApiUtil';

export const fetchArticles = (source) => dispatch => {
  getArticles(source)
    .then(articles => {
      dispatch(receiveArticles(articles));
    });
};

export const receiveArticles = (allArticles) => ({
  type: RECEIVE_ARTICLES,
  allArticles
});
