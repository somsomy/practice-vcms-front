import '../../../../assets/css/test.scss';
import ClickMenu from "../CustomContextMenu";
import {useState} from "react";


const wave = ["Pressure", "Flow", "Volume",]
const numericData = [
  {name: "Ppeak", value: 42},
  {name: "PEEP", value: 42},
  {name: "Pmean", value: 42},
  {name: "Vti", value: 42},
  {name: "Vte", value: 42},
  {name: "Vmin", value: 42},
  {name: "RR", value: 42},
  {name: "I:E", value: 42},
  {name: "O2", value: 42},
]

function VentDisplay({row, col, onContextMenu}) {

  return (
    <>
      <div className={`col col${col}`} onContextMenu={onContextMenu}>
        <div className={`box_patient row${row}`}>
          <h2>[101-Vent] Patient ID: 12345678910 / Mode: V-ACV</h2>
          <div className="cate">
            <div className="col_box">
              {
                wave.map((item, idx) => {
                  return (
                    <div className="graph_container" key={idx}>
                      <h3>{item}</h3>
                      <div className="graph_box"></div>
                    </div>
                  )
                })
              }
            </div>
            <div className="col_box">
              {
                numericData.map((item, idx) => {
                  return (
                    <div className="col_3" key={idx}>
                      <h3 className="co_01">{item.name}</h3>
                      <div className="co_02">{item.value}</div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default VentDisplay;