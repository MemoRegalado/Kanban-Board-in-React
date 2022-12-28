import React from "react";
import "../stylesheets/ColumnBoard.css";
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
    <div className="container-column-board">
      <h4>{nombrecolumna}</h4>
      <div className="column-board">
        <h6 className="columnSummary">{columnnumber == 1 ? stories.length - 1 : stories.length} {(columnnumber == 1 ? stories.length - 1 : stories.length) == 1 ? 'Story' : 'Stories' }</h6>
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
      </div>
    </div>
  );
}

export default ColumnBoard;
