import styled, { keyframes } from "styled-components";

export const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
export const InputS = styled.input`
  background-color: lightGray;
  color: white;
  height: 60px;
  width: 55px;
  margin: 3px;
  border-radius: 2px;
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  text-transform: uppercase;

  &:hover {
    height: 60px;
    width: 60px;
    margin: 0px;
    animation: ${rotate} 0.1s;
  }

  @media (max-width: 768px) {
    height: 40px;
    width: 35px;
  }
`;

export const DivContainerS = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
