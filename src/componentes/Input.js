import React from "react";

const styles = {
  input: {
    width: "100%",
    // minWidth: "300px",
    background: "rgb(255, 255, 255)",
    borderRadius: "5px",
    border: "1px solid rgb(96, 96, 96)",
    fontSize: "1.5em",
    height: "35px",
    outline: "none",
    padding: "0px 10px",
  },
};

function Input( { maxLenght=20, onChange }) {
  return <input type="text" maxLength={maxLenght} style={styles.input} onChange={onChange} />;
}

export default Input;
