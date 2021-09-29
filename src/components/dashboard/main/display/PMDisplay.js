import RechartsGraph from "../graph/RechartsGraph";
import RenderLineChart from "../graph/RechartsGraph";

const wave = [
  "ECG", "SpO2", "RESP",
  "CO2",
  "O2"
]
const numericData = [
  {name: "HR", value: 72},
  {name: "ST", value1: '+0.09', value2: '+0.09'},
  {name: "TEMP", value1: 36.5,value2: 36.5},
  {name: "Sp02", value: 98},
  {name: "IBP1", value1: '119/79', value2: '(92)'},
  {name: "IBP1", value1: '119/79', value2: '(92)'},
  {name: "RESP", value: 13},
  {name: "C02:E", value: 30},
  {name: "NIBP", value1: '121/80', value2: '(94)'},
]

function PMDisplay({row, col, onContextMenu}) {
  return (
    <div className={`col col${col}`} onContextMenu={onContextMenu}>
      <div className={`box_patient row${row}`}>
        <h2>[101-PM] Patient ID: 12345678910</h2>
        <div className="cate">
          <div className="col_box pm">
            {
              wave.map((item, idx) => {
                // if (idx <= 2) {
                  return (
                    <div className={`graph_container pm_wave${wave.length}`} key={idx}>
                      <h3>{item}</h3>
                      <div className="graph_box">
                        {/*<RenderLineChart />*/}
                      </div>
                    </div>
                  )
                // }
              })
            }
          </div>
          {/*{*/}
          {/*  wave.length >= 4 &&*/}
          {/*    <div className="col_box pm">*/}
          {/*      {*/}
          {/*        wave.map((item, idx) => {*/}
          {/*          if (idx >= 3) {*/}
          {/*            return (*/}
          {/*              <div className={`graph_container pm${wave.length}`} key={idx}>*/}
          {/*                <h3>{item}</h3>*/}
          {/*                <div className="graph_box"></div>*/}
          {/*              </div>*/}
          {/*            )*/}
          {/*          }*/}
          {/*        })*/}
          {/*      }*/}
          {/*    </div>*/}
          {/*}*/}
          <div className="col_box pm">
            {
              numericData.map((item, idx) => {
                return (
                  <div className="col_3" key={idx}>
                    <h3 className="co_03">{item.name}</h3>
                    {
                      item.value1 && <div className="tline co_04">{item.value1}<br/>{item.value2}</div>
                    }
                    <div className="co_04">{item.value}</div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
)
}

export default PMDisplay;