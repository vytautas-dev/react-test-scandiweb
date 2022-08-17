import styled from 'styled-components';

export const ProductContainer = styled.div`
  padding: 100px;
  margin-top: 100px;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 80px;

  @media screen and (max-width: 860px) {
    flex-direction: column-reverse;
    padding: 50px;
  }
`;

export const ImagesProductContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  width: 500px;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const Image = styled.img`
  width: 80px;
  height: 80px;
  cursor: pointer;
  object-fit: contain;
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductName = styled.h1`
  font-weight: 400;
  font-size: 30px;
  line-height: 27px;
  margin-bottom: 43px;
`;

export const ProductBrand = styled.h1`
  font-weight: 600;
  font-size: 30px;
  line-height: 27px;
  margin-bottom: 43px;
  @media screen and (max-width: 480px) {
    font-size: 20px;
    line-height: 20px;
    margin-bottom: 30px;
  }
`;

export const ProductPriceLabel = styled.span`
  margin-top: 40px;
  display: block;
  width: 3.472vw;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 18px;
  text-transform: uppercase;
`;

export const ProductPrice = styled.span`
  display: block;
  width: auto;
  font-weight: 700;

  margin: 10px 0 20px 0;
  height: 46px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-family: 'Raleway', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 18px;
  @media screen and (max-width: 480px) {
    font-size: 14px;
    line-height: 14px;
  }
`;

export const Button = styled.button`
  height: 52px;
  width: 20.278vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 16px;
  line-height: 100%;
  border: none;
  background-color: ${(props) =>
    props.inStock ? '#5ECE7B' : 'var(--disabledAttr)'};
  color: ${(props) => (props.inStock ? '#fff' : 'var(--black)')};
  cursor: ${(props) => (props.inStock ? 'pointer' : 'not-allowed')};
  text-transform: uppercase;
  margin: 20px 0 40px 0;
  transition: all 0.2s ease;
  &:active {
    transform: ${(props) => props.inStock && 'scale(0.95, 0.95)'};
  }
`;

export const Description = styled.div`
  ul {
    line-height: 150%;
    list-style: disc;
  }
`;
