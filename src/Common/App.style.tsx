import styled from "styled-components";

export const DivContainerS = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const DivKeyBoardS = styled.div`
  width: 35%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  @media (max-width: 1024px) {
    width: 85%;
  }

  @media (max-width: 768px) {
    width: 95%;
  }
`;

export const DivTable = styled.div`
  margin-bottom: 10px;
`;
