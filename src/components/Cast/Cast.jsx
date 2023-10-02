import { useParams } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { fetchICast } from 'api';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);
  const controller = useRef();
  useEffect(() => {
    if (!movieId) {
      return;
    }
    const getCast = async () => {
      if (controller.current) {
        controller.current.abort();
      }
      controller.current = new AbortController();

      try {
        const { cast } = await fetchICast(movieId, controller);
        setCast(cast);
      } catch (error) {
        console.log(error.message);
      }
    };
    getCast();
  }, [movieId]);

  return <div>Image Cast: {movieId}</div>;
};
export default Cast;
