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

  const total = stories.filter(story => columnnumber == story.nocolumn).length  
  
  return (
    <DivContainerColumnBoard>
      <h4>{nombrecolumna}</h4>
      <DivColumnBoard>
        <DivColumnSummary>
          {columnnumber == 1 ? total - 1 : total}{" "}
          {(columnnumber == 1 ? total - 1 : total) == 1
            ? "Story"
            : "Stories"}
        </DivColumnSummary>
        {stories.map((story) => {
          if (columnnumber == story.nocolumn)
            return (
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
            );
        })}
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
  /* padding: 10px; */
  height: 100%;
  /* gap: 10px;  */
  > h4 {
    height: 1em;
    font-size: 1.3em;
    margin-bottom: 5px;
  }
`;

const DivColumnBoard = styled.div`
  min-height: 500px;
  height: Calc(100% - 1.3em - 5px);
  width: 100%;
  padding: 10px; 
  border-radius: 10px;
  background-color: ${({ theme }) => theme.bgc2};
  border: 1px solid ${({ theme }) => theme.colorborder};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  gap: 5px;
`;

const DivColumnSummary = styled.div`
  width: 100%;
  border-bottom: 1px Solid ${({ theme }) => theme.colorborder};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0px 15px;
`;
