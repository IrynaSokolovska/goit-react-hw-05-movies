import { useState, useEffect, useRef } from 'react';
import { fetchMoviesInp } from 'api';
import { SearchMovieForm } from '../Movies/SearchMovieForm';
import { useQueryParams } from 'useQueryParams';
import toast, { Toaster } from 'react-hot-toast';
import { SectionMovie } from './Movies.styled';
import { Loader } from 'components/Loader/Loader';

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
      {loading && <Loader />}
      <SectionMovie>
        {movies && <SearchMovieForm movies={movies} />}
        {searchMovie && <p>Not found, please try something else </p>}
        <Toaster />
      </SectionMovie>
    </>
  );
};
export default Movies;
