import React, { useState } from "react";
import "../stylesheets/KanbanBoard.css";
import ColumnBoard from "./ColumnBoard.js";
import { v4 as uuidv4 } from "uuid";
import Modal from "./Modal.js";
import Input from "./Input.js";
import Button from "./Button.js";

function KanbanBoard() {
  const [storiesStories, setStoriesStories] = useState([
    { id: uuidv4(), text: "Add new story", rootstory: 1 },
    // ,
    // {id: uuidv4(),
    // text: 'Story 1',
    // rootstory: ''
    // }
  ]);
  const [storiesDoing, setStoriesDoing] = useState([]);
  const [storiesTesting, setStoriesTesting] = useState([]);
  const [storiesDone, setStoriesDone] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [input, setInput] = useState("");

  const addNewStory = (newName = input) => {
    // event.preventDefault();
    const storyNueva = {
      id: uuidv4(),
      text: newName,
      rootstory: "",
    };

    if (storyNueva.text.trim()) {
      storyNueva.text = storyNueva.text.trim();
      // storiesStories.push(storyNueva);
      const storiesActualizadas = [...storiesStories, storyNueva];
      setStoriesStories(storiesActualizadas);
      setModalVisible(false);
    }
  };

  const moverStory = (id, noColumna) => {
    //recibo la columna actual
    // y el id del objeto pa moverlo
    //console.log("moviendo columna " + noColumna);
    let storyMoving = "";
    let storyNueva = "";
    let storiesActualizadas = "";

    switch (noColumna) {
      case "1":
        storyMoving = storiesStories.find((story) => story.id == id);
        storyNueva = {
          id: uuidv4(),
          text: storyMoving.text,
          rootstory: "",
        };
        storiesActualizadas = [...storiesDoing, storyNueva];
        setStoriesDoing(storiesActualizadas);
        storiesActualizadas = storiesStories.filter((story) => story.id !== id);
        setStoriesStories(storiesActualizadas);
        break;
      case "2":
        storyMoving = storiesDoing.find((story) => story.id == id);
        storyNueva = {
          id: uuidv4(),
          text: storyMoving.text,
          rootstory: "",
        };
        storiesActualizadas = [...storiesTesting, storyNueva];
        setStoriesTesting(storiesActualizadas);
        storiesActualizadas = storiesDoing.filter((story) => story.id !== id);
        setStoriesDoing(storiesActualizadas);
        break;
      case "3":
        storyMoving = storiesTesting.find((story) => story.id == id);
        storyNueva = {
          id: uuidv4(),
          text: storyMoving.text,
          rootstory: "",
        };
        storiesActualizadas = [...storiesDone, storyNueva];
        setStoriesDone(storiesActualizadas);
        storiesActualizadas = storiesTesting.filter((story) => story.id !== id);
        setStoriesTesting(storiesActualizadas);
        break;
    }
  };

  const deleteStory = (id, noColumna) => {
    let storiesActualizadas = [];
    switch (noColumna) {
      case "1":
        console.log("borrando story " + id);
        storiesActualizadas = storiesStories.filter((story) => story.id !== id);
        setStoriesStories(storiesActualizadas);
        break;
      case "2":
        storiesActualizadas = storiesDoing.filter((story) => story.id !== id);
        setStoriesDoing(storiesActualizadas);
      case "3":
        storiesActualizadas = storiesTesting.filter((story) => story.id !== id);
        setStoriesTesting(storiesActualizadas);
      case "4":
        storiesActualizadas = storiesDone.filter((story) => story.id !== id);
        setStoriesDone(storiesActualizadas);
    }
  };

  return (
    <>
      <div className="kanban-container">
        <ColumnBoard
          nombrecolumna={"Stories"}
          stories={storiesStories}
          botonagregar={() => (setInput(""), setModalVisible(true))}
          avanzarstory={moverStory}
          deleteStory={deleteStory}
          columnnumber="1"
        />
        <ColumnBoard
          nombrecolumna={"Doing"}
          stories={storiesDoing}
          botonagregar=""
          avanzarstory={moverStory}
          deleteStory={deleteStory}
          columnnumber="2"
        />
        <ColumnBoard
          nombrecolumna={"Testing"}
          stories={storiesTesting}
          botonagregar=""
          avanzarstory={moverStory}
          deleteStory={deleteStory}
          columnnumber="3"
        />
        <ColumnBoard
          nombrecolumna={"Done"}
          stories={storiesDone}
          botonagregar=""
          avanzarstory={""}
          deleteStory={deleteStory}
          columnnumber="4"
        />
      </div>
      {modalVisible && (
        <Modal
          titulo={"New Story"}
          tituloBtn1={"Create"}
          tituloBtn2={"Exit"}
          clickBtn1={() => addNewStory()}
          clickBtn2={() => setModalVisible(false)}
          clickBtnClose={() => setModalVisible(false)}
        >
          Name:{" "}
          <Input
            maxLenght={40}
            onChange={(e) => setInput(e.target.value)}
          ></Input>
        </Modal>
      )}
    </>
  );
}

export default KanbanBoard;
