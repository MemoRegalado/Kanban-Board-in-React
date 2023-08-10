import styled from "styled-components";
import { createPortal } from "react-dom";
import { Header } from "./Header";

function ModalInfo({ titulo, clickBtnClose }) {
  return createPortal(
    <DivOverlay>
      <DivModal id="divModal">
        <Header titulo={titulo} clickBtnClose={clickBtnClose}></Header>
        aquí irá mi info
      </DivModal>
    </DivOverlay>,
    document.getElementById("modal")
  );
}

export default ModalInfo;

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
  width: 50%;
  min-height: 100px;
  height: 80%;
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
