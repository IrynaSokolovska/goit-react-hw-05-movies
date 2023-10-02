import styled from 'styled-components';

export const Section = styled.section`
  padding: 30px 0;
`;
export const Title = styled.h2`
  color: black;
  margin-bottom: 20px;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.11;
  text-align: center;
  letter-spacing: 0.02em;
  text-transform: capitalize;
`;
export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;

  h1 {
    font-size: 24px;
    margin-bottom: 20px;
  }
`;
// const BackMovLink = styled(NavLink)`
//   display: inline-flex;
//   align-items: center;
//   gap: 4px;
//   padding: 8px 0;
//   color: black;
//   text-decoration: none;
//   font-weight: 500;
//   text-transform: uppercase;
//   transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

//   &:hover,
//   &:focus {
//     color: orangered;
//   }
// `;
