// import { Link, useLocation, useSearchParams } from 'react-router-dom';
// import { MuvWrapper, MuvList } from './Movies.styled';
import { useState, useEffect, useRef } from 'react';
import { fetchMoviesInp } from 'api';
import { SearchMovieForm } from '../Movies/SearchMovieForm';
import { useQueryParams } from 'useQueryParams';
import toast, { Toaster } from 'react-hot-toast';
import { SectionMovie } from './Movies.styled';

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const { searchMovie } = useQueryParams();
  const [loading, setLoading] = useState(false);
  const controller = useRef();

  useEffect(() => {
    const fetchMovie = async () => {
      if (controller.current) {
        controller.current.abort();
      }

      controller.current = new AbortController();

      try {
        setLoading(true);

        const { results } = await fetchMoviesInp(searchMovie, controller);

        if (results.length === 0 && searchMovie) {
          toast.error('Such film not found');
        }

        setMovies(results);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMovie();
  }, [searchMovie]);

  return (
    <>
      {' '}
      <SectionMovie>
        {movies && <SearchMovieForm movies={movies} />}
        {searchMovie && <p>Not found, please try something else </p>}
        <Toaster />
      </SectionMovie>
    </>
  );
};
export default Movies;

// const Movies = () => {
//   const [movies, setMovies] = useState(null);

//   const location = useLocation();
//   const [searchParams, setSearchParams] = useSearchParams();
//   const movieId = searchParams.get('movieId') ?? '';

//   useEffect(() => {
//     fetchMoviesInp().then(results => {
//       setMovies(results);
//     });
//   }, []);

//   const updateQueryString = evt => {
//     const movieIdValue = evt.target.value;
//     if (movieIdValue === '') {
//       return setSearchParams({});
//     }
//     setSearchParams({ movieId: movieIdValue });
//     // const nextParams = name !== '' ? { name } : {};
//     // setSearchParams(nextParams);
//   };

//   const visibleMovies = movies.filter(movie => movie.includes(movieId));
//   console.log(visibleMovies);

//   return (
//     <MuvWrapper>
//       <input type="text" value={movieId} onChange={updateQueryString} />
//       <button onClick={() => setSearchParams()}>Search</button>
//       <MuvList>
//         {visibleMovies.map(movie => {
//           return (
//             <li key={movie}>
//               <Link to={`${movie}`} state={{ from: location }}>
//                 {movie}
//               </Link>
//             </li>
//           );
//         })}
//       </MuvList>
//     </MuvWrapper>
//   );
// };
// export default Movies;
