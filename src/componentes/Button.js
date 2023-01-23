import styled from "styled-components";

function Button({ children, click }) {
  return (
    <Btn onClick={click}>
      {children}
    </Btn>
  );
}

export default Button;

const Btn = styled.button`
  width: 150px;
  border-radius: 10px;
  cursor: pointer;
  border: 1px solid rgb(96, 96, 96);
  font-size: 1.1em;
  height: 35px;
`;
