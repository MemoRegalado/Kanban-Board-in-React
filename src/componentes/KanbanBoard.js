import React, { useState } from 'react';
import '../stylesheets/KanbanBoard.css'
import ColumnBoard from './ColumnBoard.js'
import Story from './Story.js'
import { v4 as uuidv4 } from 'uuid';

function KanbanBoard() {

  const [storiesStories, setStoriesStories] = useState([
    {id: uuidv4(),
    texto: 'ira'},
    {id: uuidv4(),
    texto: 'ira 2'},
    {id: uuidv4(),
    texto: 'ira 3'}
  ]);
  const [storiesDoing, setStoriesDoing] = useState([]);
  const [storiesTesting, setStoriesTesting] = useState([]);
  const [storiesDone, setStoriesDone] = useState([]);

  
  // const agregarStory = () =>{
  //   //console.log('ppppp');
  //    const storyNueva = {
  //     id: uuidv4(),
  //     texto: 'probando',
  //   };
    
  //   if (storyNueva.texto.trim()){
  //     storyNueva.texto = storyNueva.texto.trim();
  //     const storiesActualizadas = [storyNueva, ...storiesStories];
  //     setStoriesStories(storiesActualizadas);
  //   }
  // };

  const moverStory = (id, noColumna) => {
    //recibo la columna actual
    // y el id del objeto pa moverlo
    console.log('moviendo columna ' + noColumna)
    let storyMoving = '';
    let storyNueva = '';
    let storiesActualizadas = '';

    switch (noColumna) {
      case '1':
        storyMoving = storiesStories.find(story => story.id == id);
        storyNueva = {
          id: uuidv4(),
          texto: storyMoving.texto,
        };
        storiesActualizadas = [storyNueva, ...storiesDoing];
        setStoriesDoing(storiesActualizadas);
        storiesActualizadas = storiesStories.filter(story => story.id !== id);
        setStoriesStories(storiesActualizadas);
        break;
      case '2':
        storyMoving = storiesDoing.find(story => story.id == id);
        storyNueva = {
          id: uuidv4(),
          texto: storyMoving.texto,
        };
        storiesActualizadas = [storyNueva, ...storiesTesting];
        setStoriesTesting(storiesActualizadas);
        storiesActualizadas = storiesDoing.filter(story => story.id !== id);
        setStoriesDoing(storiesActualizadas);
        break;
      case '3':
        storyMoving = storiesTesting.find(story => story.id == id);
        storyNueva = {
          id: uuidv4(),
          texto: storyMoving.texto,
        };
        storiesActualizadas = [storyNueva, ...storiesDone];
        setStoriesDone(storiesActualizadas);
        storiesActualizadas = storiesTesting.filter(story => story.id !== id);
        setStoriesTesting(storiesActualizadas);
        break;    
    }
  };

  //agregarStory();

  return (
    <div className='kanban-container'>
      <ColumnBoard nombrecolumna={'Stories'} stories={storiesStories} botonagregar='' avanzarstory={moverStory} columna='1' />
      <ColumnBoard nombrecolumna={'Doing'} stories={storiesDoing} botonagregar='' avanzarstory={moverStory} columna='2'/>
      <ColumnBoard nombrecolumna={'Testing'} stories={storiesTesting} botonagregar='' avanzarstory={moverStory} columna='3'/>
      <ColumnBoard nombrecolumna={'Done'} stories={storiesDone} botonagregar='' avanzarstory={''} columna='4'/>
    </div>

  );

};

export default KanbanBoard;