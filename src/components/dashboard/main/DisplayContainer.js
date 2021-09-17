import VentDisplay from "./display/VentDisplay";
import {useState} from "react";
import NoneDisplay from "./display/NoneDisplay";

const arr = [
  "3X3",
  "4X2", "4X3", "4X4",
  "5X2", "5X3", "5X5",
  "6X2", "6X3", "6X6",
  "7X3", "7X7",
  "8X3", "8X4", "8X5", "8X6", "8X7", "8X8"
]

function DisplayContainer() {
  const [row, setRow] = useState(4)
  const [col, setCol] = useState(4)

  const onChange = e => {
    const arr = e.target.value.split('X')
    setRow(arr[0])
    setCol(arr[1])
  }

  return (
    <main id="main">
      <div className="layout">
        <div className="row">
          {
            [...Array(row * col)].map((item, idx) => {
                if(++idx % 2 === 0) return <NoneDisplay key={idx} row={row} col={col}/>
              return <VentDisplay key={idx} row={row} col={col}/>
            })
          }
        </div>
        <select onChange={onChange} style={{color: "black"}}>
          {
            arr.map((item, idx) => {
              return <option value={item}>{item}</option>
            })
          }
        </select>
      </div>
    </main>
  )
}

export default DisplayContainer;