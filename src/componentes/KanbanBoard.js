import React, { useState } from "react";
import "../stylesheets/KanbanBoard.css";
import ColumnBoard from "./ColumnBoard.js";
import { v4 as uuidv4 } from "uuid";
import Modal from "./Modal.js";
import Input from "./Input.js";

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
  const [modalCreateVisible, setModalCreateVisible] = useState(false);
  const [modalDeleteVisible, setModalDeleteVisible] = useState(false);
  const [input, setInput] = useState("");
  const [storyId, setStoryId] = useState("");
  const [noColumn, setNoColumn] = useState(0);

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
      setModalCreateVisible(false);
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

  const showModalDelete = (id, noColumna) => {
    setStoryId(id);
    setNoColumn(noColumna);
    setModalDeleteVisible(true);
  };

  const deleteStory = () => {
    let storiesActualizadas = [];
    switch (noColumn) {
      case "1":
        console.log("borrando story " + storyId);
        storiesActualizadas = storiesStories.filter(
          (story) => story.id !== storyId
        );
        setStoriesStories(storiesActualizadas);
        break;
      case "2":
        storiesActualizadas = storiesDoing.filter(
          (story) => story.id !== storyId
        );
        setStoriesDoing(storiesActualizadas);
      case "3":
        storiesActualizadas = storiesTesting.filter(
          (story) => story.id !== storyId
        );
        setStoriesTesting(storiesActualizadas);
      case "4":
        storiesActualizadas = storiesDone.filter(
          (story) => story.id !== storyId
        );
        setStoriesDone(storiesActualizadas);
    }
    setModalDeleteVisible(false);
  };

  return (
    <>
      <div className="kanban-container">
        <ColumnBoard
          nombrecolumna={"Stories"}
          stories={storiesStories}
          botonagregar={() => (setInput(""), setModalCreateVisible(true))}
          avanzarstory={moverStory}
          deleteStory={showModalDelete}
          columnnumber="1"
        />
        <ColumnBoard
          nombrecolumna={"Doing"}
          stories={storiesDoing}
          botonagregar=""
          avanzarstory={moverStory}
          deleteStory={showModalDelete}
          columnnumber="2"
        />
        <ColumnBoard
          nombrecolumna={"Testing"}
          stories={storiesTesting}
          botonagregar=""
          avanzarstory={moverStory}
          deleteStory={showModalDelete}
          columnnumber="3"
        />
        <ColumnBoard
          nombrecolumna={"Done"}
          stories={storiesDone}
          botonagregar=""
          avanzarstory={""}
          deleteStory={showModalDelete}
          columnnumber="4"
        />
      </div>
      {modalCreateVisible && (
        <Modal
          titulo={"New Story"}
          tituloBtn1={"Create"}
          tituloBtn2={"Exit"}
          clickBtn1={() => addNewStory()}
          clickBtn2={() => setModalCreateVisible(false)}
          clickBtnClose={() => setModalCreateVisible(false)}
        >
          Name:{" "}
          <Input
            maxLenght={40}
            onChange={(e) => setInput(e.target.value)}
          ></Input>
        </Modal>
      )}
      {modalDeleteVisible && (
        <Modal
          titulo={"Delete Story"}
          tituloBtn1={"Delete"}
          tituloBtn2={"Exit"}
          clickBtn1={() => deleteStory()}
          clickBtn2={() => setModalDeleteVisible(false)}
          clickBtnClose={() => setModalDeleteVisible(false)}
        >
          <h3>This actión can't be undone. Continue? </h3>
        </Modal>
      )}
    </>
  );
}

export default KanbanBoard;
