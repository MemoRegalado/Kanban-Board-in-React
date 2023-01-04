import React from 'react'

const styles = {
  modalAlert : {
    width: "300px",
    height: "40px",
    background: "rgba(0, 0, 0, 0.6)",
    position: "fixed",
    top: "Calc( 100vh - 90px )",
    left: "0",
    margin: "20px",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    color: "#fff",
    fontWeight: "100",
    padding: "0px 10px",
    letterSpacing: "0.3em"
  },
  button : {
    fontWeight: "700",
    background: "transparent",
    border: "0px",
    color: "#FFF",
    fontSize: "1em",
    cursor: "pointer",
  }
}

function Alert({ children, titleBtn, onClick }) {
  return (
    <div style={styles.modalAlert}>
        {children}
        <button style={styles.button} onClick={() => onClick()} >{titleBtn}</button>
    </div>
  )
}

export default Alert