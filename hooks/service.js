import axios from 'axios';

const BASE_URL = `https://www.omdbapi.com/`;

export const getAction = async (search, page) => {
  return axios.get(`${BASE_URL}?apikey=7b7ef4b&s=${search}&page=${page}`);
};
