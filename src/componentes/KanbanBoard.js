import { useState } from "react";
import styled from "styled-components";
import ColumnBoard from "./ColumnBoard.js";
import { v4 as uuidv4 } from "uuid";
import Modal from "./Modal.js";
import Input from "./Input.js";
import Alert from "./Alert";

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
  const [alertUndoneVisible, setAlertUndoneVisible] = useState(false);
  const [input, setInput] = useState("");
  const [storyId, setStoryId] = useState("");
  const [noColumn, setNoColumn] = useState(0);
  const [storyDeleted, setStoryDeleted] = useState({});

  const configColumns = [
    {
      noColumn: 1,
      arrStories: storiesStories,
      fnSet: setStoriesStories,
      nameColumn: "Stories",
    },
    {
      noColumn: 2,
      arrStories: storiesDoing,
      fnSet: setStoriesDoing,
      nameColumn: "Doing",
    },
    {
      noColumn: 3,
      arrStories: storiesTesting,
      fnSet: setStoriesTesting,
      nameColumn: "Testing",
    },
    {
      noColumn: 4,
      arrStories: storiesDone,
      fnSet: setStoriesDone,
      nameColumn: "Done",
    },
  ];

  const addNewStory = (newName = input, noColumn = 1) => {
    // event.preventDefault();
    const storyNueva = {
      id: uuidv4(),
      text: newName,
      rootstory: "",
    };

    if (storyNueva.text.trim()) {
      storyNueva.text = storyNueva.text.trim();
      const storiesActualizadas = [
        ...configColumns[noColumn - 1].arrStories,
        storyNueva,
      ];
      configColumns[noColumn - 1].fnSet(storiesActualizadas);
      setModalCreateVisible(false);
      console.log(configColumns[0]);
    }
  };

  const moverStory = (id, noColumna) => {
    //recibo la columna actual
    // y el id del objeto pa moverlo
    //console.log("moviendo columna " + noColumna);
    let storyMoving = "";
    let storyNueva = "";
    let storiesActualizadas = "";
    // console.log(noColumna);
    switch (noColumna) {
      case 1:
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
      case 2:
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
      case 3:
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
    let storyDel = {};
    switch (noColumn) {
      case 1:
        // console.log("borrando story " + storyId);
        storiesActualizadas = storiesStories.filter(
          (story) => story.id !== storyId
        );
        storyDel = storiesStories.find((story) => story.id === storyId);
        setStoriesStories(storiesActualizadas);
        break;
      case 2:
        storiesActualizadas = storiesDoing.filter(
          (story) => story.id !== storyId
        );
        storyDel = storiesDoing.find((story) => story.id === storyId);
        setStoriesDoing(storiesActualizadas);
        break;
      case 3:
        storiesActualizadas = storiesTesting.filter(
          (story) => story.id !== storyId
        );
        storyDel = storiesTesting.find((story) => story.id === storyId);
        setStoriesTesting(storiesActualizadas);
        break;
      case 4:
        storiesActualizadas = storiesDone.filter(
          (story) => story.id !== storyId
        );
        storyDel = storiesDone.find((story) => story.id === storyId);
        setStoriesDone(storiesActualizadas);
        break;
    }
    setModalDeleteVisible(false);
    setStoryId("");
    setStoryDeleted({ ...storyDel, noColumn: noColumn });
    setAlertUndoneVisible(true);
    setTimeout(() => {
      setAlertUndoneVisible(false);
    }, 3000);
  };

  const undeleteStory = () => {
    setAlertUndoneVisible(false);
    addNewStory(storyDeleted.text, storyDeleted.noColumn);
  };

  return (
    <>
      <KanbanContainer>
        {configColumns.map((column) => (
          <ColumnBoard
            key={column.nameColumn}
            nombrecolumna={column.nameColumn}
            stories={column.arrStories}
            botonagregar={() => (setInput(""), setModalCreateVisible(true))}
            avanzarstory={moverStory}
            deleteStory={showModalDelete}
            columnnumber={column.noColumn}
          />
        ))}
      </KanbanContainer>
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
      {alertUndoneVisible && (
        <Alert titleBtn="Undone" onClick={undeleteStory}>
          Story deleted
        </Alert>
      )}
    </>
  );
}

export default KanbanBoard;

const KanbanContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: nowrap;
  height: Calc(100% - 2.5em - 10px);
`;
