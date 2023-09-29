import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();
  // useEffect(() => {
  //   HTTP requvest

  //   return () => {
  //     second
  //   }
  // }, [])
  return <div>Reviews: {movieId}</div>;
};
export default Reviews;
