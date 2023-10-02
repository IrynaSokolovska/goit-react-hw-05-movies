import { useSearchParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useState } from 'react';

export const useQueryParams = movies => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [, setSearchFailed] = useState(false);
  const searchMovie = searchParams.get('query') ?? '';

  const updateQuery = () => {
    const newParams = searchMovie !== '' ? { query: searchMovie } : {};
    setSearchParams(newParams);
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const movieSearch = form.elements.query.value;
    if (!movieSearch) {
      toast.error('Please input movie title');
      return;
    }

    if (!movies && movies.length === 0) {
      setSearchFailed(true);
      toast.error('No movies found ');
    }

    searchParams.set('query', movieSearch);
    setSearchParams(searchParams);
    form.reset();
  };

  return { searchMovie, updateQuery, handleFormSubmit };
};
