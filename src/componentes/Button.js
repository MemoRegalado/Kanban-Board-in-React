import React from "react";

const styles = {
  btn: {
    width: "150px",
    borderRadius: "10px",
    cursor: "pointer",
    backgroundColor: "",
    border: "1px solid rgb(96, 96, 96)",
    fontSize: "1.1em",
    height: "35px",
  },
};

function Button({ children, click }) {
  return (
    <button style={styles.btn} onClick={click}>
      {children}
    </button>
  );
}

export default Button;
