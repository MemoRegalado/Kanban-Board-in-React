import styled from "styled-components";

function Story({
  text,
  id,
  avanzarstory,
  columnnumber,
  rootstory,
  addnewstory,
  deleteStory,
}) {
  const handleClick = () => {
    //  event.preventDefault();
    // rootstory();
    if (rootstory != "") {
      {
        addnewstory();
      }
    } else {
      if (avanzarstory != "") {
        avanzarstory(id, columnnumber);
      }
    }
  };

  const handleDelete = () => {
    if (rootstory == "") {
      deleteStory(id, columnnumber);
    }
  };

  return (
    <DivStory draggable>
      <DivTxtStory
        onClick={handleClick}
        title={rootstory == "" ? "Click to move" : ""}
      >
        {text}
      </DivTxtStory>
      {rootstory == "" && (
        <BtnIconDelete onClick={handleDelete} title="Delete story">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-trash3-fill"
            viewBox="0 0 16 16"
          >
            <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
          </svg>
        </BtnIconDelete>
      )}
    </DivStory>
  );
}

export default Story;

const DivStory = styled.div`
  width: 100%;
  padding: 0px;
  background-color: rgb(255, 255, 255);
  text-align: center;
  border-radius: 10px;
  border: 1px solid rgb(96, 96, 96);
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DivTxtStory = styled.div`
  padding: 10px;
  height: 100%;
  width: -webkit-fill-available;
`;

const BtnIconDelete = styled.button`
  cursor: pointer;
  margin: 10px;
  border: none;
  background-color: transparent;
`;
