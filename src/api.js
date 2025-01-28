const axios = require('axios');

const API_BASE_URL = 'https://api.themoviedb.org/3';

const endpoints = {
  playing: '/movie/now_playing',
  popular: '/movie/popular',
  top: '/movie/top_rated',
  upcoming: '/movie/upcoming'
};

async function fetchMovies(type) {
  try {
    const response = await axios.get(`${API_BASE_URL}${endpoints[type]}`, {
      params: {
        api_key: process.env.TMDB_API_KEY
      }
    });

    return response.data.results;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      throw new Error('Invalid API key. Please check your configuration.');
    } else if (error.code === 'ENOTFOUND') {
      throw new Error('Unable to connect to TMDB. Please check your internet connection.');
    }
    throw error;
  }
}

module.exports = {
  fetchMovies
};