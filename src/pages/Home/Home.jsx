import toast, { Toaster } from 'react-hot-toast';
import { fetchColHomeFilms } from 'api';
import { MovieList } from 'pages/Movies/MovieList';
import { useState, useRef, useEffect } from 'react';
import { Section, Title } from './Home.styled';
import { Loader } from 'components/Loader/Loader';

const Home = () => {
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [requestCancelled, setRequestCancelled] = useState(false);
  const controller = useRef();

  useEffect(() => {
    const getCollectionFilm = async () => {
      setRequestCancelled(false);

      if (controller.current) {
        controller.current.abort();
      }

      controller.current = new AbortController();

      try {
        setLoading(true);
        setError(false);

        const { results } = await fetchColHomeFilms(controller);
        setMovies(results);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          setError(true);
          console.log(error.message);
        }
      } finally {
        setLoading(false);
      }
    };
    getCollectionFilm();
  }, []);

  return (
    <main>
      <Section>
        <Title>Trending today</Title>
        {loading && <Loader />}
        {error && !loading && requestCancelled && (
          <p>
            ❌ Something went wrong,try reload page{' '}
            {toast.error('Ooops, something went wrong')}
          </p>
        )}
        {movies && movies.length > 0 && <MovieList movies={movies} />}
        <Toaster />
      </Section>
    </main>
  );
};
export default Home;
