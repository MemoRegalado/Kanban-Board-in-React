import styled from "styled-components";
import { CgSun, CgMoon } from "react-icons/cg";

function BtnTheme({ theme, setTheme }) {
  const handleClick = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <Btn onClick={handleClick}>
      {theme === "light" ? <CgMoon /> : <CgSun />}
    </Btn>
  );
}

export default BtnTheme;

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
