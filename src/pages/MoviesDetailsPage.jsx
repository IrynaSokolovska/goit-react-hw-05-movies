import { useRef } from 'react';
import { Suspense } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';

const MoviesDetailsPage = () => {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');
  const { movieId } = useParams();
  // console.log(movieId);
  // useEffect(() => {
  //   HTTP;

  //   return () => {
  //     second;
  //   };
  // }, [third]);

  return (
    <>
      <h1>MoviesDetailsPage: {movieId}</h1>
      <Link to={backLinkLocationRef.current}>Back</Link>

      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default MoviesDetailsPage;
