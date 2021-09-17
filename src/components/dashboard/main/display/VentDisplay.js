import '../../../../assets/css/test.scss';
import WaveData from "./WaveData";


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

function VentDisplay({row, col}) {

  return (
    <div className={`col col${col}`}>
      <div className={`box_patient row${row}`}>
        <h2>[101] Patient ID: 12345678910 / Mode: V-ACV</h2>
        <div className="cate">
          <div className="col_box">
            {
              wave.map((item, idx) => <WaveData key={idx} wave={item} />)
            }
          </div>
          <div className="col_box">
            {
              numericData.map((item, idx) => {
                return (
                  <div className="col_3">
                    <h3 className="co_01">{item.name}</h3>
                    <span className="co_02">{item.value}</span>
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