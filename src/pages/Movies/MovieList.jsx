import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <>
      <ul>
        {movies.map(({ id, original_title, name }) => (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              {original_title ? original_title : name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
