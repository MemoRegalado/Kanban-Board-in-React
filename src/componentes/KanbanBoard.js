import { useState } from "react";
import styled from "styled-components";
import ColumnBoard from "./ColumnBoard.js";
import { v4 as uuidv4 } from "uuid";
import Modal from "./Modal.js";
import Input from "./Input.js";
import Alert from "./Alert";
import useLocalStorage from "../hooks/useLocalStorage.js";

function KanbanBoard() {
  const [modalCreateVisible, setModalCreateVisible] = useState(false);
  const [modalDeleteVisible, setModalDeleteVisible] = useState(false);
  const [alertUndoneVisible, setAlertUndoneVisible] = useState(false);
  const [input, setInput] = useState("");
  const [storyId, setStoryId] = useState("");
  const [storyDeleted, setStoryDeleted] = useState({});

  const configColumns = [
    {
      noColumn: 1,
      //arrStories: storiesStories,
      //fnSet: setStoriesStories,
      nameColumn: "Stories",
    },
    {
      noColumn: 2,
      //arrStories: storiesDoing,
      //fnSet: setStoriesDoing,
      nameColumn: "Doing",
    },
    {
      noColumn: 3,
      //arrStories: storiesTesting,
      //fnSet: setStoriesTesting,
      nameColumn: "Testing",
    },
    {
      noColumn: 4,
      //arrStories: storiesDone,
      //fnSet: setStoriesDone,
      nameColumn: "Done",
    },
  ];

  const storiesInitial = [
    { id: uuidv4(), nocolumn: 1, text: "Add new story", rootstory: 1 },
  ];

  const [columns, setColumns] = useLocalStorage("columns_V1", configColumns);

  const [stories, setStories] = useLocalStorage("stories_V1", storiesInitial);
  
  const addNewStory = (newName = input) => {
    // event.preventDefault();
    const storyNueva = {
      id: uuidv4(),
      nocolumn: 1,
      text: newName,
      rootstory: 0,
    };

    if (storyNueva.text.trim()) {
      storyNueva.text = storyNueva.text.trim();
      const storiesActualizadas = [...stories, storyNueva];
      setStories(storiesActualizadas);
      setModalCreateVisible(false);
    }
  };

  const avanzarStory = (id) => {
    //stories
    const updatedStories = stories.map((story) => {
      if (story.id === id) {
        return {
          ...story, // Copia todas las propiedades del objeto original
          nocolumn:
            story.nocolumn + 1 > columns.length
              ? columns.length
              : story.nocolumn + 1, // Modifica la propiedad deseada
        };
      } else {
        return story; // Devuelve el objeto sin modificar
      }
    });
    setStories(updatedStories);
  };

  const showModalDelete = (id) => {
    setStoryId(id);
    setModalDeleteVisible(true);
  };

  const deleteStory = () => {
    const storyDel = stories.find((story) => story.id === storyId);
    const updatedStories = stories.filter((story) => story.id !== storyId);
    setStoryDeleted(storyDel);
    setStories(updatedStories);
    setModalDeleteVisible(false);
    setAlertUndoneVisible(true);
    setTimeout(() => {
      setAlertUndoneVisible(false);
    }, 3000);
  };

  const undeleteStory = () => {
    setAlertUndoneVisible(false);
    const storiesActualizadas = [...stories, storyDeleted];
    setStories(storiesActualizadas);
  };

  return (
    <>
      <KanbanContainer>
        {columns.map((column) => (
          <ColumnBoard
            key={column.nameColumn}
            nombrecolumna={column.nameColumn}
            stories={stories}
            botonagregar={() => (setInput(""), setModalCreateVisible(true))}
            avanzarstory={avanzarStory}
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
  gap: 15px;
`;
