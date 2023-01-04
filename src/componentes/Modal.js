import React from "react";
import Button from "./Button.js";
import "../stylesheets/Modal.css"

const styles = {
  overlay: {
    width: "100vw",
    height: "100vh",
    position: "fixed",
    top: "0",
    left: "0",
    background: "rgba(0,0,0,0.5)",
    padding: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    width: "500px",
    minHeight: "100px",
    background: "#fff",
    position: "relative",
    borderRadius: "5px",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    padding: "10px",
    backgroundColor: "rgb(216, 200, 133)",
    border: "2px solid rgb(96, 96, 96)",
  },
  header: {
    padding: "0px 0px 10px 0px",
    borderBottom: "1px solid rgb(96, 96, 96)",
    display: "flex",
    justifyContent: "center",
  },
  children: {
    padding: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
  },
  footer: {
    padding: "10px 0px 0px 0px",
    borderTop: "1px solid rgb(96, 96, 96)",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: "10px",
  },
  svg: {
    width: "100%",
    height: "100%",
  },
};

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
    <div id="divOverlay" style={styles.overlay}>
      <div id="divModal" style={styles.modal}>
        <div id="divHeader" style={styles.header}>
          <h2>{titulo}</h2>
          <button className="btnClose" onClick={clickBtnClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-x"
              viewBox="0 0 16 16"
              style={styles.svg}
            >
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </button>
        </div>
        <div id="divChildren" style={styles.children}>
          {children}
        </div>
        <div id="divFooter" style={styles.footer}>
          <Button click={clickBtn1}>{tituloBtn1}</Button>
          <Button click={clickBtn2}>{tituloBtn2}</Button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
