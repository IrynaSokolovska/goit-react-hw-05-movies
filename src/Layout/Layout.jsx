import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Wrapper, NavList, StyledLink } from './Layout.styled';

const Layout = () => (
  <>
    <Wrapper>
      <header>
        <NavList>
          <li>
            <StyledLink to="/">Home</StyledLink>
          </li>
          <li>
            <StyledLink to="/movies">Movies</StyledLink>
          </li>
        </NavList>
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </Wrapper>
  </>
);

export default Layout;
