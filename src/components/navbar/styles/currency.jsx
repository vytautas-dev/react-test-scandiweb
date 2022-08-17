import styled from 'styled-components';

export const SelectCurrency = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  font-weight: 500;
  font-size: 18px;
  position: relative;

  #options {
    display: flex;
    flex-direction: column;
    width: 114px;
    position: absolute;
    left: 50%;
    top: 50px;
    transform: translate(-50%, 0);
    background-color: #ffffff;

    box-shadow: ${(props) =>
      props.active ? 'rgba(149, 157, 165, 0.2) 0px 8px 24px' : ''};

    span {
      display: block;
      padding: 10px;
      cursor: pointer;
    }

    span:hover {
      background-color: #eeeeee;
    }
  }

  svg {
    width: 10px;
    height: 10px;
    margin-left: 10px;
  }
`;
