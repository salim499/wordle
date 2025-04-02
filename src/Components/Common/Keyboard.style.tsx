import styled from "styled-components";

const InputS = styled.input`
  background-color: lightGray;
  color: white;
  height: 55px;
  width: 50px;
  margin: 2px;
  border-radius: 2px;
  text-align: center;
  font-size: 30px;
  text-transform: uppercase;

  &:hover {
    background-color: white;
    color: lightGray;
    height: 55px;
    width: 55px;
    margin: 0px;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    height: 40px;
    width: 35px;
  }
`;

export default InputS;
