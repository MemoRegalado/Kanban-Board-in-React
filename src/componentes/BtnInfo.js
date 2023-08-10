import { IoInformation } from "react-icons/io5"
import ButtonCircle from "./ButtonCircle"

function BtnInfo({ onClick }) {
  return (
    <ButtonCircle onClick={onClick}>
      <IoInformation />
    </ButtonCircle>
  )
}

export default BtnInfo