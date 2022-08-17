import styled from 'styled-components';

export const CartContainer = styled.div`
  width: 100%;
  padding: 50px 100px 54px 100px;

  @media screen and (max-width: 860px) {
    padding: 50px 50px 54px 50px;
  }

  .cart-item-index:last-of-type {
    border-bottom: 1px solid #e5e5e5;
  }
`;

export const CartItemContainer = styled.div`
  border-top: 1px solid #e5e5e5;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 205px;
  display: flex;
  flex-direction: row;
  margin: 20px 0;
  &:hover #cart-item-name {
    text-decoration: underline;
  }
`;

export const CartItemDetailsContainer = styled.div`
  width: 100%;
`;

export const CartItemActionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  margin: 20px 0.8vw 0 0;
  height: 100%;
`;

export const CartItemName = styled.span`
  display: block;
  font-family: Raleway;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: left;
  &:hover {
    color: #5ece7b;
  }
  @media screen and (max-width: 480px) {
    font-size: 20px;
  }
`;

export const CartCountButton = styled.button`
  background-color: #fff;
  border: 1px solid #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  font-size: 1.5rem;
  user-select: none;
  cursor: pointer;
`;

export const CartArrows = styled.div`
  position: absolute;
  z-index: 6;
  top: 40%;
  left: 40%;
  height: 20%;
  width: 1.5vw;
  display: flex;
  align-items: center;
  background-color: none;
  cursor: pointer;
  svg {
    filter: invert(7%) sepia(7%) saturate(1063%) hue-rotate(176deg)
      brightness(94%) contrast(88%);
  }
  svg:hover {
    filter: invert(77%) sepia(30%) saturate(732%) hue-rotate(80deg)
      brightness(90%) contrast(86%);
  }
`;

export const CartArrowPrevious = styled(CartArrows)`
  border-radius: 0 50% 50% 0;
  justify-content: flex-start;
  left: 0;
  padding-left: 5px;
`;

export const CartArrowNext = styled(CartArrows)`
  border-radius: 50% 0 0 50%;
  justify-content: flex-end;
  left: calc(100% - 1.5vw);
  padding-right: 5px;
`;

export const CartItemImageContainer = styled.div`
  position: relative;
  margin-top: 20px;
  width: 9.792vw;
  height: 185px;
  z-index: 5;
  user-select: none;
  img {
    width: 9.792vw;
    height: 100%;
    object-fit: contain;
  }
`;

export const Summary = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  line-height: 200%;
  padding: 0;
  margin-top: 50px;

  @media screen and (max-width: 480px) {
    align-items: center;
  }

  li {
    font-size: 24px;
    span {
      font-weight: 700;
    }
  }
`;

export const OrderButton = styled.button`
  background-color: #5ece7b;
  width: 279px;
  height: 43px;
  color: #fff;
  text-transform: uppercase;
  border: none;
  font-size: 14px;
  font-weight: 600;
  margin-top: 20px;
  cursor: pointer;
`;
