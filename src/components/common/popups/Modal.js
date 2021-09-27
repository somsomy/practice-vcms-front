import {useContext} from "react";
import {ModalContext} from "./context/modalContext";
import '../../../assets/css/modal.css'

function Modal() {
  const {options, actions} = useContext(ModalContext);

  return (
    <div className="modal-container" id="ad" style={{display: options.open}}>
      <div className="modal">
        <h1 className="modal_title">{options.title}</h1>
        <div className="modal_con">
          {options.content}
        </div>
        <a href="#" className="m_close" onClick={actions.handleClose}></a>
      </div>
    </div>
  )
}

export default Modal;