import styled from 'styled-components';

export const Title = styled.span`
  display: block;
  width: 299px;
  height: 68px;
  margin: 150px 0 0 100px;
  text-transform: capitalize;
  font-style: normal;
  font-weight: normal;
  font-size: 42px;
  color: #1d1f22;
  @media screen and (max-width: 860px) {
    margin: 100px 0 0 50px;
  }
`;

export const ProductsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 50px;
  gap: 60px 30px;
  padding: 0 50px 0 100px;
  @media screen and (max-width: 860px) {
    padding: 0 50px 0 50px;
  }
`;

export const ItemContainer = styled.div`
  flex-grow: 1;
  padding: 10px;
  width: 380px;
  display: flex;
  flex-direction: column;
  transition: all 0.5s ease;
  &:hover {
    box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
  }
`;

export const ItemName = styled.span`
  position: static;
  height: 29px;
  left: 0px;
  right: 0px;
  top: 0px;
  color: #1d1f22;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: block;
  width: 354px;
  word-wrap: normal;
  font-weight: 300;
  min-height: 29px;
  text-decoration: none;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: 29px;
  letter-spacing: 0px;
  text-align: left;
  align-items: center;
  margin-top: 30px;
`;

export const ItemTop = styled.div`
  position: relative;
`;

export const ProductImage = styled.img`
  width: 300px;
  height: 100%;
  object-fit: contain;
  margin: 0;
`;
export const ProductImageContainer = styled.div`
  width: 100%;
  height: 400px;
`;

export const OutOfStockOverlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 0.5;
  left: 0;
  top: -5px;
  background-color: #ffff;
  display: flex;
`;

export const OutOfStockText = styled.span`
  font-weight: 400;
  font-size: 24px;
  line-height: 38.4px;
  text-transform: uppercase;
  margin: auto;
  color: #a6a6a6;
`;

export const ItemPrice = styled.span`
  color: #1d1f22;
  display: block;
  font-weight: 500;
  margin-top: 5px;
  width: auto;
  height: 29px;
  text-decoration: none;
`;

export const AddToCartButton = styled.div`
  svg {
    width: 24px;
    height: 24px;
    fill: white;
  }
  border-radius: 100%;
  padding: 10px;
  border: none;
  background-color: #5ece7b;
  position: absolute;
  top: calc(100% - 26px);
  left: 80%;

  &:hover {
    transform: scale(1.2, 1.2);
    transition: all 0.5s ease;
  }
  &:active {
    transform: scale(0.9, 0.9);
  }
  cursor: pointer;
`;
