import styled from "styled-components";

function Button({ children, click }) {
  return <Btn onClick={click}>{children}</Btn>;
}

export default Button;

const Btn = styled.button`
  width: 150px;
  border-radius: 10px;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.colorborder};
  font-size: 1.1em;
  height: 35px;
  background-color: ${({ theme }) => theme.bgcBtn};
  color: ${({ theme }) => theme.text};
`;
