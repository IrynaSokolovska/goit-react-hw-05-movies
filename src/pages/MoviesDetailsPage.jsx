import { useRef, useState, useEffect } from 'react';
import { Suspense } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { fetchMovDetPage } from 'api';
const MoviesDetailsPage = () => {
  const [moviesInfo, setMoviesInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const backLinkLocationRef = useRef(location?.state?.from ?? '/movies');
  const { movieId } = useParams();

  const defaultImg =
    'https://cdnn1.ukraina.ru/img/103372/05/1033720530_0:0:0:0_1920x0_80_0_0_d593b30bbc6c0935fd25e65720edfacc.jpg';

  const controller = useRef();

  useEffect(() => {
    if (!movieId) return;
    const getMovieItem = async () => {
      if (controller.current) {
        controller.current.abort();
      }

      controller.current = new AbortController();
      try {
        setLoading(true);
        const { data } = await fetchMovDetPage(movieId, controller);
        setMoviesInfo(data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };
    getMovieItem();
  }, [movieId]);

  return (
    <>
      <Link to={backLinkLocationRef.current}>Back</Link>

      {moviesInfo && (
        <div>
          <img
            src={
              moviesInfo.poster_path
                ? `https://image.tmdb.org/t/p/w500/${moviesInfo.poster_path}`
                : defaultImg
            }
            alt={moviesInfo.original_title}
            width={250}
          />
          <div>
            <h2>{moviesInfo.original_title}</h2>
            <ul>
              <li>
                <span>User score: </span>
                <p>{(moviesInfo.vote_average * 10).toFixed(1)}</p>
              </li>
              <li>
                <span>Overview :</span> <p>{moviesInfo.overview}</p>
              </li>
              <li>
                <span> Genres:</span>{' '}
                <p>
                  {moviesInfo.genres.map(({ id, name }) => (
                    <span key={id}>{name} </span>
                  ))}
                </p>
              </li>
            </ul>
          </div>
        </div>
      )}

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

// const MoviesDetailsPage = () => {
//   const location = useLocation();
//   const backLinkLocationRef = useRef(location.state?.from ?? '/movies');
//   const { movieId } = useParams();
//   // console.log(movieId);
//   // useEffect(() => {
//   //   HTTP;

//   //   return () => {
//   //     second;
//   //   };
//   // }, [third]);

//   return (
//     <>
//       <h1>MoviesDetailsPage: {movieId}</h1>
//       <Link to={backLinkLocationRef.current}>Back</Link>

//       <ul>
//         <li>
//           <Link to="cast">Cast</Link>
//         </li>
//         <li>
//           <Link to="reviews">Reviews</Link>
//         </li>
//       </ul>
//       <Suspense fallback={<div>Loading...</div>}>
//         <Outlet />
//       </Suspense>
//     </>
//   );
// };
// export default MoviesDetailsPage;
