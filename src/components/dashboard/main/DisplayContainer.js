import VentDisplay from "./display/VentDisplay";

function DisplayContainer({displayArray}) {
  const {row, col} = displayArray;

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