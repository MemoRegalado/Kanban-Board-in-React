import styled from "styled-components";

function Alert({ children, titleBtn, onClick }) {
  return (
    <DivModalAlert>
      {children}
      <button onClick={() => onClick()}>
        {titleBtn}
      </button>
    </DivModalAlert>
  );
}

export default Alert;

const DivModalAlert = styled.div`
  width: 300px;
  height: 40px;
  background: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: Calc(100vh - 90px);
  left: 0;
  margin: 20px;
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #fff;
  font-weight: 100;
  padding: 0px 10px;
  letter-spacing: 0.3em;
  >button {
    font-weight: 700;
    background: transparent;
    border: 0px;
    color: #FFF;
    font-size: 1em;
    cursor: pointer;
  }
`;
