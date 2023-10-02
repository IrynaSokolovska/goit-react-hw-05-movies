import { useParams } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import toast from 'react-hot-toast';
import { fetchReviews } from 'api';
import { Loader } from 'components/Loader/Loader';
import { TitleCast } from 'components/Cast/Cast.styled';
import { RevWrapper } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [requestCancelled, setRequestCancelled] = useState(false);
  const controller = useRef();

  useEffect(() => {
    if (!movieId) return;
    const getReviews = async () => {
      setLoading(true);
      setError(false);
      setRequestCancelled(false);

      if (controller.current) {
        controller.current.abort();
      }

      controller.current = new AbortController();

      try {
        const { results } = await fetchReviews(movieId, controller);

        setReviews(results);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          setError(true);
        }
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };
    getReviews();
  }, [movieId]);

  return (
    <>
      <TitleCast>Reviews: </TitleCast>
      {loading && <Loader />}

      {error && !loading && requestCancelled && (
        <p>
          ❌ Something went wrong,try reload page{' '}
          {toast.error('Ooops, something went wrong')}
        </p>
      )}

      {reviews && !error && reviews.length > 0 ? (
        reviews.map(({ author, content, id }) => (
          <RevWrapper key={id}>
            <TitleCast> Author: {author}</TitleCast>
            <p>{content}</p>
          </RevWrapper>
        ))
      ) : (
        <p>We don't have any reviews for this movie </p>
      )}
    </>
  );
};
export default Reviews;
