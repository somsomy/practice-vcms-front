import {Link} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {ModalContext} from "../../../common/popups/context/modalContext";
import {DisplayContext} from "./context/displayContext";

const displayArrays = [
  "3X2",
  "4X2", "4X4",
  "5X2", "5X4",
  "6X4", "6X6",
  "7X4", "7X6",
  "8X4", "8X6", "8X8",
]

const ModalContent = ({onClose}) => {
  const {actions} = useContext(DisplayContext);
  const [row, setRow] = useState(4);
  const [col, setCol] = useState(4);

  const onChange = e => {
    const selectedValue = e.target.value.split('X')
    setRow(selectedValue[0])
    setCol(selectedValue[1])
  }

  const onSave = () => {
    actions.handleSetRow(row)
    actions.handleSetCol(col)
    onClose();
  }

  const onApply = () => {
    actions.handleSetRow(row)
    actions.handleSetCol(col)
  }

  return (
    <>
      <div className="m_form">
        <label className="label">Rows &amp; Columns</label>
        <select id="rc" onChange={onChange} value={`${row}X${col}`}>
          {
            displayArrays.map((item, idx) => <option key={idx}>{item}</option>)
          }
        </select>
      </div>
      <div className="m_form">
        <label className="label">Number of Display</label>
        <input type="text" id="num" value={row * col} disabled/>
        <button style={{background: "#000"}}>alert</button>
      </div>
      <div className="m_form2">
        <label>
          <input type="checkbox" name="check"/>
          <span className="label-text">Numeric Data Only</span>
        </label>
      </div>
      <div className="modal_bottom">
        <button className="modal_btn" onClick={onSave}>OK</button>
        <button className="modal_btn" onClick={onClose}>Cancel</button>
        <button className="modal_btn" onClick={onApply}>Apply</button>
      </div>
    </>
  )
}

function DisplaySettings() {
  const {actions} = useContext(ModalContext);

  const onClick = () => {
    actions.handleTitle('Display Settings')
    actions.handleContent(<ModalContent onClose={actions.handleClose}/>)
    actions.handleOpen()
  }

  return (
    <Link to="#" onClick={onClick}>Display Settings</Link>
  )
}

export default DisplaySettings;