import styled from "styled-components";

export const ModalContainerS = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0; 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContentS = styled.div`
  background: white;
  padding: 20px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ButtonS = styled.button`
  padding: 8px;
  border-radius: 2px;
  cursor: pointer;
`;

export const TitleS = styled.h1<{ win: boolean }>`
  color: ${(props) => (props.win ? "green" : "red")};
`;
