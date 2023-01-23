import React from "react";
import styled from "styled-components";
import Story from "./Story.js";

function ColumnBoard({
  nombrecolumna,
  botonagregar,
  stories,
  avanzarstory,
  columnnumber,
  deleteStory,
}) {
  return (
    <DivContainerColumnBoard>
      <h4>{nombrecolumna}</h4>
      <DivColumnBoard>
        <DivColumnSummary>
          {columnnumber == 1 ? stories.length - 1 : stories.length}{" "}
          {(columnnumber == 1 ? stories.length - 1 : stories.length) == 1
            ? "Story"
            : "Stories"}
        </DivColumnSummary>
        {stories.map((story) => (
          <Story
            key={story.id}
            id={story.id}
            text={story.text}
            avanzarstory={avanzarstory}
            columnnumber={columnnumber}
            rootstory={story.rootstory}
            addnewstory={botonagregar}
            deleteStory={deleteStory}
          />
        ))}
      </DivColumnBoard>
    </DivContainerColumnBoard>
  );
}

export default ColumnBoard;

const DivContainerColumnBoard = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 25%;
  padding: 10px;
  height: 100%;
  >h4 {
  height: 1em;
  font-size: 1.3em;
  margin-bottom: 5px;
  }
`;

const DivColumnBoard = styled.div`
  min-height: 500px;
  height: Calc(100% - 1.3em - 5px);
  width: 100%;
  padding: 5px;
  border-radius: 10px;
  background-color: rgb(239, 240, 220);
  border: 1px solid rgb(162, 162, 157);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  gap: 5px;
`;

const DivColumnSummary = styled.div`
  width: 100%;
  border-bottom: 1px Solid rgb(162,162,157);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0px 15px;
`;