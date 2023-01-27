import styled from "styled-components";

function Input({ maxLenght = 20, onChange }) {
  return <InputStyled type="text" maxLength={maxLenght} onChange={onChange} />;
}

export default Input;

const InputStyled = styled.input`
  width: 100%;
  background: ${({ theme }) => theme.bgTxtColor};
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colorborder};
  font-size: 1.5em;
  height: 35px;
  outline: none;
  padding: 0px 10px;
  color: ${({ theme }) => theme.text};
`;
