import styled from "styled-components";
import { MdDeleteForever } from "react-icons/md";

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
        avanzarstory(id);
      }
    }
  };

  const handleDelete = () => {
    if (rootstory == "") {
      deleteStory(id, columnnumber);
    }
  };

  const handleDragStart = (ev) => {
    // This method runs when the dragging starts
    // console.log("Started");
  };

  const handleDrag = (ev) => {
    // This method runs when the component is being dragged
    // console.log(ev.clientX + " - " + ev.clientY);
  };

  const handleDragEnd = (ev) => {
    // This method runs when the dragging stops
    // if (ev.clientX >= 250 && ev.clientX <= 430) avanzarstory(id, 1);
    // if (ev.clientX >= 460 && ev.clientX <= 637) avanzarstory(id, 2);
    // if (ev.clientX >= 675 && ev.clientX <= 845) avanzarstory(id, 3);
    // console.log(columnnumber);
  };

  return (
    <DivStory
      draggable
      onDragStart={handleDragStart}
      onDrag={handleDrag}
      onDragEnd={handleDragEnd}
    >
      <DivTxtStory
        onClick={handleClick}
        title={rootstory == "" ? "Click to move" : ""}
      >
        {text}
      </DivTxtStory>
      {rootstory == "" && (
        <BtnIconDelete onClick={handleDelete} title="Delete story">
          <MdDeleteForever />
        </BtnIconDelete>
      )}
    </DivStory>
  );
}

export default Story;

const DivStory = styled.div`
  width: 100%;
  padding: 0px;
  background-color: ${({ theme }) => theme.bgTxtColor};
  text-align: center;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colorborder};
  cursor: grab;
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
  margin: 5px;
  border: none;
  background-color: transparent;
  width: 34px;
  height: Calc(100% - 10px);
  > svg {
    display: flex;
    width: 100%;
    height: 100%;
    color: ${({ theme }) => theme.text};
  }
`;
