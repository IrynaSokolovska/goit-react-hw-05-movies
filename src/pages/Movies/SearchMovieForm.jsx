import { MovieList } from './MovieList';
import { useState } from 'react';
import { useQueryParams } from 'useQueryParams';
import { Toaster } from 'react-hot-toast';

export const SearchMovieForm = ({ movies }) => {
  const { updateQuery, handleFormSubmit } = useQueryParams(movies);

  return (
    <>
      <div>
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            name="query"
            onChange={updateQuery}
            placeholder="Search movies"
          />
          <button type="submit">Search</button>
        </form>
      </div>

      <MovieList movies={movies} />
      <Toaster />
    </>
  );
};
