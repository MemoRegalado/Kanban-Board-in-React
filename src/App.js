// import "./App.css";
import KanbanBoard from "./componentes/KanbanBoard";
import Themes from "./contexts/Themes";
import styled, { ThemeProvider } from "styled-components";
import BtnTheme from "./componentes/BtnTheme";
import { useState } from "react";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  // const localStorageTheme = localStorage.getItem('theme');
  
  // if (!localStorageTheme){
  //   localStorage.setItem('theme','light');
  //   localStorageTheme = 'light'
  // } 

  // const saveTheme = (theme) => {
  //   localStorage.setItem('theme',theme)
  //   setTheme(theme)
  // }

  const [theme, setTheme] = useLocalStorage('theme_V1','light');
  
  return (
    <ThemeProvider theme={Themes[theme]}>
      <Main>
        <DivAplicacionKanbanboard>
          <h1>Kanban Board</h1>
          <BtnTheme setTheme={setTheme} theme={theme} />
          <KanbanBoard />
        </DivAplicacionKanbanboard>
      </Main>
    </ThemeProvider>
  );
}

export default App;

const Main = styled.div`
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.bgc0};
  font-family: Lato, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const DivAplicacionKanbanboard = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 5px;
  min-width: 800px;
  width: 95vw;
  height: 95vh;
  padding: 15px 15px;
  background-color: ${({ theme }) => theme.bgc1};
  /* background-color: rgb(216, 200, 133); */
  border: 2px solid ${({ theme }) => theme.colorborder};
  border-radius: 20px;
  position: absolute;
  > h1 {
    font-size: 2.5em;
    text-transform: uppercase;
    width: 100%;
    text-align: center;
    height: 1em;
    margin-bottom: 10px;
  }
  > button {
    position: absolute;
    top: 10px;
    left: Calc(100% - 40px);
    outline: none;
    accent-color: ${({ theme }) => theme.bgTxtColor};
  }
`;
