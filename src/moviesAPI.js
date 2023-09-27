import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const API_KEY = '03b78576cde6fb09def3fed266aedae5';

export const getTrending = () => {
  return axios
    .get('/trending/movie/day', {
      params: {
        api_key: API_KEY,
      },
    })
    .then(response => response.data.results)
    .catch(error => {
      console.error('Error fetching movies:', error);
      throw error;
    });
};





export const searchMovies = query => {
  return axios
    .get('/search/movie', {
      params: {
        key: API_KEY,
        query: query,
      },
    })
    .then(response => response.data)
    .catch(error => {
      console.error('Error fetching movies:', error);
      throw error;
    });
};

export const getMovieDetails = movieId => {
  return axios
    .get(`/movie/${movieId}`, {
      params: {
        key: API_KEY,
      },
    })
    .then(response => response.data)
    .catch(error => {
      console.error('Error fetching movies:', error);
      throw error;
    });
};

export const getMovieCredits = movieId => {
  return axios
    .get(`/movie/${movieId}/credits`, {
      params: {
        key: API_KEY,
      },
    })
    .then(response => response.data)
    .catch(error => {
      console.error('Error fetching movies:', error);
      throw error;
    });
};

export const getMovieReviews = movieId => {
  return axios
    .get(`/movie/${movieId}/reviews`, {
      params: {
        key: API_KEY,
      },
    })
    .then(response => response.data)
    .catch(error => {
      console.error('Error fetching movies:', error);
      throw error;
    });
};
