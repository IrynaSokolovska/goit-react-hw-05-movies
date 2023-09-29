import { useParams } from 'react-router-dom';

const Cast = () => {
  const { movieId } = useParams();
  // useEffect(() => {
  //   HTTP requvest

  //   return () => {
  //     second
  //   }
  // }, [])
  return <div>Image Cast: {movieId}</div>;
};
export default Cast;
