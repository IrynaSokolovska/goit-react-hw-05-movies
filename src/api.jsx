import axios from 'axios';

const API_KEY = 'd272f7afcd49ddf11c86bddc55d10d97';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

// const BASE_URL =
//   'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMjcyZjdhZmNkNDlkZGYxMWM4NmJkZGM1NWQxMGQ5NyIsInN1YiI6IjY1MTI4OTBlM2E0YTEyMDBhZDliNGZlMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AL4Saoyjs3zqVZNGBuCXk4jUsVZfGhQV4qVRYcSfphQ';

// Home.jsx
export const fetchColHomeFilms = async controller => {
  const response = await axios.get(`/trending/all/day?api_key=${API_KEY}`, {
    signal: controller.current.signal,
  });
  return response.data;
};

//Movies.js

export const fetchMoviesInp = async (searchMovie, controller) => {
  const { data } = await axios.get(
    `/search/movie?api_key=${API_KEY}&query=${searchMovie}`,
    { signal: controller.current.signal }
  );

  return data;
};
// MoviesDetailsPage.jsx
export const fetchMovDetPage = async (movieId, controller) => {
  const response = await axios.get(`/movie/${movieId}?api_key=${API_KEY}`, {
    signal: controller.current.signal,
  });
  return response;
};
// Cast.jsx

export const fetchCast = async (movieId, controller) => {
  const response = await axios.get(
    `/movie/${movieId}/credits?api_key=${API_KEY}`,
    { signal: controller.current.signal }
  );
  return response.data;
};
// Reviews
export const fetchReviews = async (movieId, controller) => {
  const response = await axios.get(
    `/movie/${movieId}/reviews?api_key=${API_KEY}`,
    { signal: controller.current.signal }
  );

  return response.data;
};
