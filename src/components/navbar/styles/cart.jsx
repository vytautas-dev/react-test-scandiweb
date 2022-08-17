import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CartItemCountShape = styled.div`
  display: block;
  padding: 2px;
  min-width: 20px;
  font-size: 14px;
  height: 20px;
  color: #1d1f22;
  background-color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 60px;
  position: absolute;
  top: 10px;
  left: 10px;
`;

export const CartItemCountContent = styled.span`
  color: #ffff;
  font-weight: 700;
  font-size: 14px;
  font-family: 'Roboto', sans-serif;
  line-height: 16px;
`;

export const CartIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  position: relative;
  margin-left: 38px;
  svg {
    width: 20px;
  }
`;

export const StyledOverlay = styled.div`
  background: #39374838;
  width: 100%;
  height: 100%;
  position: fixed;
  top: ${(props) => (props.scroll <= 80 ? 80 - props.scroll : '0')}px;
  left: 0;
  z-index: 6;
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 4.2rem;
  right: 5px;
  width: 320px;
  background-color: #fff;
  z-index: 7;
  padding: 8px 1.1vw 1.3vw 1.1vw;
  height: 600px;

  @media screen and (max-width: 480px) {
    top: 5rem;
    right: -50px;
    height: 400px;
  }
  a {
    width: 50%;
  }
`;

export const CartName = styled.span`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: right;
`;

export const ItemCount = styled.span`
  font-family: Raleway;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: right;
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 540px;
  overflow-y: auto;
  scrollbar-width: none;
`;

export const ItemContainer = styled.div`
  display: flex;
  margin-top: 20px;
  height: 160px;
  justify-content: space-between;
  align-items: center;
`;

export const NameAndPriceAndAttr = styled.div`
  display: flex;
  flex-direction: column;
  width: 120px;
  justify-content: center;
`;

export const ItemNameLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const ItemName = styled.span`
  margin-bottom: 5px;
  font-family: Raleway;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 26px;
  letter-spacing: 0px;
  text-align: left;
  color: #1d1f22;
  &:hover {
    color: #52d67a;
  }
`;

export const ItemNumbers = styled.span`
  display: block;
  font-family: Raleway;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: right;
`;

export const ItemPrice = styled(ItemNumbers)`
  text-align: left;
  margin: 0;
  text-decoration: none;
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 137px;
`;

export const CountControl = styled.button`
  background-color: #ffffff;
  font-weight: 400;
  width: 24px;
  height: 24px;
  border: 1px solid #1d1f22;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 110px;
  height: 110px;
`;

export const ItemImage = styled.img`
  height: 100%;
`;

export const AttributesContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 8px 0;
`;

export const AttributeGroup = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 8px;
`;

export const AttributeGroupName = styled.span`
  display: none;
`;

export const AttrButton = styled.button`
  background-color: ${(props) => !props.inStock || (!props.active && '#fff')};
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : ''};
  height: ${(props) => (props.backgroundColor ? '10px' : '')};
  border: 1px solid ${(props) => (props.active ? 'green' : 'gray')};
  color: ${(props) => (props.active ? 'green' : 'gray')};
  margin: 3px;
`;

export const ModalFooterContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
`;

export const ButtonCommon = styled.button`
  width: 9vw;
  height: 43px;
  font-size: 14px;
  line-height: 16.8px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 2vw;
  text-transform: uppercase;
  cursor: pointer;
  white-space: nowrap;
  text-decoration: none;
  decoration: none;
  transition: all 0.5s ease;
  &:active {
    transform: scale(0.95, 0.95);
  }
`;

export const ViewBagButton = styled(ButtonCommon)`
  width: 100%;
  background-color: #fff;
  border: 1px solid #1d1f22;
  color: #1d1f22;
  text-decoration: none;
`;

export const CheckOutButton = styled(ButtonCommon)`
  width: 50%;
  background-color: #52d67a;
  color: #fff;
  border: none;
  width: 50%;
`;

export const TotalPriceContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: 43px 0 35px 0;
`;

export const TotalPriceTotal = styled.span`
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
`;

export const TotalPriceCost = styled.span`
  font-weight: 700;
  font-size: 16px;
  line-height: 25.6px;
`;
