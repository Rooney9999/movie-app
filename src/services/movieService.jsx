import axios from 'axios';

const API_KEY = 'e805378d';
const BASE_URL = 'http://www.omdbapi.com/';

export const fetchMovies = async (page = 1, search = '') => {
  const response = await axios.get(BASE_URL, {
    params: {
      apikey: API_KEY,
      s: search || 'movie',
      page,
    },
  });
  return response.data;
};

export const fetchMovieDetails = async (id) => {
  const response = await axios.get(BASE_URL, {
    params: {
      apikey: API_KEY,
      i: id,
      plot: 'full',
    },
  });
  return response.data;
};
