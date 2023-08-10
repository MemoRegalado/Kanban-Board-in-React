import styled from "styled-components";
import { CgClose } from "react-icons/cg";

function ButtonClose({ onClick }) {
  return (
    <BtnClose onClick={onClick}>
      <CgClose />
    </BtnClose>
  );
}

export {ButtonClose} ;

const BtnClose = styled.button`
  position: absolute;
  top: 5px;
  right: 10px;
  width: 30px;
  height: 30px;
  border: none;
  background: none;
  cursor: pointer;
  transition: 0.3s ease all;
  border-radius: 5px;
  color: ${({ theme }) => theme.colorborder};
  &:hover {
    background: ${({ theme }) => theme.bgc2};
  }
  > svg {
    display: flex;
    width: 100%;
    height: 100%;
    color: ${({ theme }) => theme.text};
  }
`;

