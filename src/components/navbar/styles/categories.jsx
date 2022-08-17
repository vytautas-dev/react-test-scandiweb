import styled from 'styled-components';

export const CategoriesContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: 15px;
  cursor: pointer;

  @media screen and (max-width: 480px) {
    height: 50%;
    gap: 4px;
    flex-direction: column;
    justify-content: center;
  }
`;
