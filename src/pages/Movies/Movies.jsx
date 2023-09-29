import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { MuvWrapper, MuvList } from './Movies.styled';
import { useState, useEffect } from 'react';

import { fetchMovies } from 'api';

const Movies = () => {
  // const [movies, setMovies] = useState([
  //   'movie-1',
  //   'movie-2',
  //   'movie-3',
  //   'movie-4',
  //   'movie-5',
  // ]);
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const movieId = searchParams.get('movieId') ?? '';

  useEffect(() => {
    fetchMovies().then(results => {
      setMovies(results);
    });
  }, []);

  const updateQueryString = evt => {
    const movieIdValue = evt.target.value;
    if (movieIdValue === '') {
      return setSearchParams({});
    }
    setSearchParams({ movieId: movieIdValue });
    // const nextParams = name !== '' ? { name } : {};
    // setSearchParams(nextParams);
  };

  const visibleMovies = movies.filter(movie => movie.includes(movieId));
  console.log(visibleMovies);

  return (
    <MuvWrapper>
      <input type="text" value={movieId} onChange={updateQueryString} />
      <button onClick={() => setSearchParams()}>Search</button>
      <MuvList>
        {visibleMovies.map(movie => {
          return (
            <li key={movie}>
              <Link to={`${movie}`} state={{ from: location }}>
                {movie}
              </Link>
            </li>
          );
        })}
      </MuvList>
    </MuvWrapper>
  );
};
export default Movies;
