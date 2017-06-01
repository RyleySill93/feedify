import axios from 'axios';

export const getChannels = () => {
  return axios({
    method: "GET",
    url: `https://newsapi.org/v1/sources?language=en`
  });
};
