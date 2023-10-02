import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  padding: 0 15px;
  gap: 20px;
  align-items: center;

  background-color: #f5f1f1;
  height: 40px;
`;
export const NavList = styled.ul`
  display: flex;
  gap: 20px;
  align-items: center;
  padding-left: 20px;
  height: 40px;
  color: black;
`;
export const NavItem = styled.li``;

export const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: #f03d5b;
  }
`;
