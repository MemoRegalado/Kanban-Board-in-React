import React from "react";
import Button from "./Button.js";
import styled from "styled-components";

function Modal({
  children,
  titulo,
  tituloBtn1 = "Btn1",
  tituloBtn2 = "Btn2",
  clickBtn1 = "",
  clickBtn2 = "",
  clickBtnClose = "",
}) {
  return (
    <DivOverlay id="divOverlay">
      <DivModal id="divModal" >
        <DivHeader id="divHeader" >
          <h2>{titulo}</h2>
          <BtnClose onClick={clickBtnClose}>
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-x"
              viewBox="0 0 16 16"
            >
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </Svg>
          </BtnClose>
        </DivHeader>
        <DivChildren id="divChildren">
          {children}
        </DivChildren>
        <DivFooter id="divFooter">
          <Button click={clickBtn1}>{tituloBtn1}</Button>
          <Button click={clickBtn2}>{tituloBtn2}</Button>
        </DivFooter>
      </DivModal>
    </DivOverlay>
  );
}

export default Modal;

const DivOverlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0,0,0,0.5);
  padding: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DivModal = styled.div`
  width: 500px;
  min-height: 100px;
  background: #fff;
  position: relative;
  border-radius: 5px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 10px;
  background-color: rgb(216, 200, 133);
  border: 2px solid rgb(96, 96, 96);
`;

const DivHeader = styled.div `
  padding: 0px 0px 10px 0px;
  border-bottom: 1px solid rgb(96, 96, 96);
  display: flex;
  justify-content: center;
`;

const DivChildren = styled.div `
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const DivFooter = styled.div`
  padding: 10px 0px 0px 0px;
  border-top: 1px solid rgb(96, 96, 96);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
`;

const Svg = styled.svg`
  width: 100%;
  height: 100%;
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
  color: rgb(96, 96, 96);
  &:hover {
  background: #f2f2f2;
  }
`;

