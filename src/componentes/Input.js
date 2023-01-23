import styled from "styled-components";

function Input({ maxLenght = 20, onChange }) {
  return (
    <InputStyled
      type="text"
      maxLength={maxLenght}
      onChange={onChange}
    />
  );
}

export default Input;

const InputStyled = styled.input`
  width: 100%;
  background: rgb(255, 255, 255);
  border-radius: 5px;
  border: 1px solid rgb(96, 96, 96);
  font-size: 1.5em;
  height: 35px;
  outline: none;
  padding: 0px 10px;
`;
