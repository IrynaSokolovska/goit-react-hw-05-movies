import { useParams } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { fetchCast } from 'api';
import {
  TitleCast,
  CardWrapper,
  GalleryList,
  GalleryImg,
  WrapperInf,
} from './Cast.styled';

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
        const { cast } = await fetchCast(movieId, controller);
        setCast(cast);
      } catch (error) {
        console.log(error.message);
      }
    };
    getCast();
  }, [movieId]);

  const defaultImg =
    'https://cdnn1.ukraina.ru/img/103372/05/1033720530_0:0:0:0_1920x0_80_0_0_d593b30bbc6c0935fd25e65720edfacc.jpg';

  return (
    <>
      <TitleCast>Cast:</TitleCast>

      <CardWrapper>
        <GalleryList>
          {cast &&
            cast.length > 0 &&
            cast.map(({ profile_path, original_name, character, id }) => (
              <li key={id}>
                <GalleryImg
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                      : defaultImg
                  }
                  alt={original_name}
                />
                <WrapperInf> Character : {character}</WrapperInf>
              </li>
            ))}

          {cast && cast.length === 0 && <p>Cast not found 😥</p>}
        </GalleryList>
      </CardWrapper>
    </>
  );
};
export default Cast;
