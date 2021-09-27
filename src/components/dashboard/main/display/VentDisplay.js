import '../../../../assets/css/test.scss';


const wave = ["Pressure", "Flow", "Volume"]
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

const ClickMenu = () => {
  return (
    <div className="dropdown-container">
      <input type="checkbox" id="drop"/>
      <label htmlFor="drop">[101] Patient ID: 12345678910 #########</label>
      <ul className="content">
        <li><a href="#" id="zoom_in">Zoom In</a></li>
        <hr/>
        <li><a href="#">Numberic Parameter Settings</a></li>
        <li><a href="#">Waveform Settings</a></li>
        <li><a href="#">Alarm Settings</a></li>
        <hr/>
        <li><a href="#">Trend Review</a></li>
        <li><a href="#">Event Review</a></li>
        <hr/>
        <li><a href="#">Admit or Discharge</a></li>
      </ul>
    </div>
  )
}

function VentDisplay({row, col}) {

  return (
    <div className={`col col${col}`}>
      <div className={`box_patient row${row}`}>
        <h2>[101] Patient ID: 12345678910 / Mode: V-ACV</h2>
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
  )
}

export default VentDisplay;