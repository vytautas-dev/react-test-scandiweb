import styled from 'styled-components';

export const AttributesContainer = styled.div``;

export const AttributeGroupName = styled.span`
  /* visibility: hidden; */
`;

export const AttributeGroup = styled.div`
  display: flex;
  gap: 0.833vw;
  margin-bottom: 8px;
  flex-wrap: wrap;
`;

export const AttributeButton = styled.button`
  background-color: ${(props) =>
    !props.inStock || !props.active ? '#fff' : '#1D1F22'};
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : ''};
  min-width: 63px;
  height: 45px;
  border: 0.13em solid ${(props) => (props.active ? 'green' : '#1D1F22')};
  font-size: 16px;
  line-height: 18px;
  font-weight: 400;
  font-family: 'Source Sans Pro', sans-serif;
  color: ${(props) =>
    !props.inStock ? 'gray' : props.active ? '#fff' : '#292929'};

  @media screen and (max-width: 860px) {
    height: 35px;
    min-width: 53px;
  }

  @media screen and (max-width: 480px) {
    height: 25px;
    min-width: 43px;
  }
`;
