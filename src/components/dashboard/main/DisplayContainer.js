import VentDisplay from "./display/VentDisplay";
import {useContext, useEffect, useState} from "react";
import NoneDisplay from "./display/NoneDisplay";
import {DisplayContext} from "../nav/popups/context/displayContext";

function DisplayContainer() {
  const {displayArray} = useContext(DisplayContext)
  const [row, setRow] = useState(4)
  const [col, setCol] = useState(4)

  useEffect(() => {
    setRow(displayArray.row)
    setCol(displayArray.col)
  }, [displayArray.row])

  return (
    <main id="main">
      <div className="layout">
        <div className="row">
          {
            [...Array(row * col)].map((item, idx) => {
              return <VentDisplay key={idx} row={displayArray.row} col={displayArray.col}/>
            })
          }
        </div>
      </div>
    </main>
  )
}

export default DisplayContainer;