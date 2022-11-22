import React from 'react';
import '../stylesheets/ColumnBoard.css'
import Story from './Story.js'



function ColumnBoard ({ nombrecolumna, botonagregar, stories, avanzarstory, columna }){
  return (
    <div className='container-column-board'>
      <h4>{nombrecolumna}</h4>
      <div className='column-board'>
        {
          stories.map((story) =>
            <Story 
              key={story.id}
              id={story.id}
              texto={story.texto}
              avanzarstory={avanzarstory}
              columna={columna}
            />
          )
        }
      </div>
    </div>
  );
}

export default ColumnBoard;