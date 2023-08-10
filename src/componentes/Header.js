import styled from "styled-components";
import { ButtonClose } from "./ButtonClose";

function Header({ titulo, clickBtnClose }) {
  return (
    <DivHeader id="divHeader">
      <h2>{titulo}</h2>
      <ButtonClose onClick={clickBtnClose}></ButtonClose>
    </DivHeader>
  );
}

export {Header};

const DivHeader = styled.div`
  padding: 0px 0px 10px 0px;
  border-bottom: 1px solid ${({ theme }) => theme.colorborder};
  display: flex;
  justify-content: center;
  > h2 {
    color: ${({ theme }) => theme.text}
  }
`;
