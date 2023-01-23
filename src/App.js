import "./App.css";
import KanbanBoard from "./componentes/KanbanBoard";
import styled from "styled-components";

function App() {
  return (
    <DivAplicacionKanbanboard>
      <h1>Kanban Board</h1>
      <KanbanBoard />
    </DivAplicacionKanbanboard>
  );
}

export default App;

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
  padding: 10px 0px;
  background-color: rgb(216, 200, 133);
  border: 2px solid rgb(172, 152, 103);
  border-radius: 20px;
  > h1 {
    font-size: 2.5em;
    text-transform: uppercase;
    width: 100%;
    text-align: center;
    height: 1em;
    margin-bottom: 10px;
  }
`;
