import axios from 'axios';

const KEY = '6d32d7392e27483d8969f1f94673bbea';

export const getArticles = (source) => {
  return axios({
    method: "GET",
    url: `https://newsapi.org/v1/articles?source=${source}&apiKey=${KEY}`
  });
};
