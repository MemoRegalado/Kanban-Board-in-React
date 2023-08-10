import styled from "styled-components";
// import { CgSun, CgMoon } from "react-icons/cg";

function ButtonCircle({ children, onClick }) {
  return (
    <Btn onClick={onClick}>
      {children}
    </Btn>
  );
}

export default ButtonCircle;

const Btn = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  outline: none;
  border: 1px solid ${({ theme }) => theme.colorborder};
  cursor: pointer;
  background-color: ${({ theme }) => theme.bgc2};
  padding: 5px;
  > svg {
    display: flex;
    width: 100%;
    height: 100%;
    color: ${({ theme }) => theme.text};
  }
`;
