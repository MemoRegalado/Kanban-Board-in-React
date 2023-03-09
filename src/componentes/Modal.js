import Button from "./Button.js";
import styled from "styled-components";
import { CgClose } from "react-icons/cg";
import { createPortal } from "react-dom";

function Modal({
  children,
  titulo,
  tituloBtn1 = "Btn1",
  tituloBtn2 = "Btn2",
  clickBtn1 = "",
  clickBtn2 = "",
  clickBtnClose = "",
}) {
  return createPortal ((
    <DivOverlay id="divOverlay">
      <DivModal id="divModal">
        <DivHeader id="divHeader">
          <h2>{titulo}</h2>
          <BtnClose onClick={clickBtnClose}>
            <CgClose />
          </BtnClose>
        </DivHeader>
        <DivChildren id="divChildren">{children}</DivChildren>
        <DivFooter id="divFooter">
          <Button click={clickBtn1}>{tituloBtn1}</Button>
          <Button click={clickBtn2}>{tituloBtn2}</Button>
        </DivFooter>
      </DivModal>
    </DivOverlay>),
    document.getElementById('modal')
  );
}

export default Modal;

const DivOverlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  padding: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DivModal = styled.div`
  width: 500px;
  min-height: 100px;
  /* background: #fff; */
  position: relative;
  border-radius: 5px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 10px;
  background-color: ${({ theme }) => theme.bgc1};
  border: 2px solid ${({ theme }) => theme.colorBorderModal};
`;

const DivHeader = styled.div`
  padding: 0px 0px 10px 0px;
  border-bottom: 1px solid ${({ theme }) => theme.colorborder};
  display: flex;
  justify-content: center;
`;

const DivChildren = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const DivFooter = styled.div`
  padding: 10px 0px 0px 0px;
  border-top: 1px solid ${({ theme }) => theme.colorborder};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
`;

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
