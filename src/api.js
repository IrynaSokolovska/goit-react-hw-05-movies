const API_KEY = 'd272f7afcd49ddf11c86bddc55d10d97';
// const BASE_URL =
//   'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMjcyZjdhZmNkNDlkZGYxMWM4NmJkZGM1NWQxMGQ5NyIsInN1YiI6IjY1MTI4OTBlM2E0YTEyMDBhZDliNGZlMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AL4Saoyjs3zqVZNGBuCXk4jUsVZfGhQV4qVRYcSfphQ';

//Movies.js
const fetchMovies = async query => {
  const API_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`;

  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching movies', error);
    return [];
  }
};

export { fetchMovies };
