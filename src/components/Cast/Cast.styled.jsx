import styled from 'styled-components';

export const TitleCast = styled.h3`
  margin-bottom: 20px;
  text-align: center;
`;
export const CardWrapper = styled.div`
  flex-basis: calc((100% - 4 * 24px) / 5);
`;
export const GalleryList = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 18px;
  margin: 0px auto;
  padding: 40px 0px;
  list-style: none;
`;
export const GalleryImg = styled.img`
  width: 100%;
  border-radius: 2px;
  height: 200px;
  object-fit: cover;
  &:hover,
  &:focus {
    cursor: zoom-in;
  }
`;
export const WrapperInf = styled.div`
  border: 1px solid #bdbec8;
  padding: 8px;
  color: #5f6188;
`;
