import {Link} from "react-router-dom";
import {useContext} from "react";
import {ModalContext} from "../../../common/popups/context/modalContext";

const ModalContent = ({onClose}) => {
  return (
    <>
      <p className="modal_text">Arrange the patients in bed-number order?</p>
      <div className="modal_bottom">
        <button className="modal_btn">Yes</button>
        <button className="modal_btn" onClick={onClose}>No</button>
      </div>
    </>
  )
}

function AutoDisplay() {
  const {actions} = useContext(ModalContext);

  const onClick = () => {
    actions.handleTitle('Auto Display')
    actions.handleContent(<ModalContent onClose={actions.handleClose}/>)
    actions.handleOpen()
  }

  return (
    <Link to="#" onClick={onClick}>Auto Display</Link>
  )
}

export default AutoDisplay;