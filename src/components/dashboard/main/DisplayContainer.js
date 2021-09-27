import VentDisplay from "./display/VentDisplay";
import {useContext} from "react";
import {DisplayContext} from "../nav/popups/context/displayContext";

function DisplayContainer() {
  const {row, col} = useContext(DisplayContext).displayArray;

  return (
    <main id="main">
      <div className="layout">
        <div className="row">
          {
            [...Array(row * col)].map((item, idx) => {
              return <VentDisplay key={idx} row={row} col={col}/>
            })
          }
        </div>
      </div>
    </main>
  )
}

export default DisplayContainer;