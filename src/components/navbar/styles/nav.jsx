import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  height: 100%;
`;

export const NavContainer = styled.div`
  display: flex;
  position: absolute;
  z-index: 1000;
  top: 0;
  left: 0;
  background-color: #fff;
  height: 80px;
  width: 100vw;
  justify-content: space-between;
  align-items: center;
  flex: 0;
  padding: 0 100px 0 100px;
  @media screen and (max-width: 860px) {
    padding: 0 50px 0 50px;
  }
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  height: 100%;
  text-transform: uppercase;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0px;
  text-align: center;
  color: #1d1f22;
  font-style: normal;
  &:hover {
    color: #5ece7b;
  }

  &.active {
    color: '#5ECE7B';
    border-bottom: 2px solid #5ece7b;
    padding-bottom: 20px;
    @media screen and (max-width: 480px) {
      padding-bottom: 0px;
    }
  }

  @media screen and (max-width: 860px) {
    font-size: 14px;
  }
`;

export const CartAndCurrency = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  height: 40px;
`;
