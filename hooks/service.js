import axios from 'axios';

const BASE_URL = `https://www.omdbapi.com/`;
const apiKey = '7b7ef4b';

export const SearchMovieService = async (search, page) => {
  return axios.get(`${BASE_URL}?apikey=${apiKey}&s=${search}&page=${page}`);
};

export const MovieByID = async (id) => {
  return axios.get(`${BASE_URL}?apikey=${apiKey}&i=${id}`);
};
