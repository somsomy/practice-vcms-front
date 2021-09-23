function NoneDisplay({col, row}) {
  return (
    <div className={`col col${col}`}>
      <div className={`box_none row${row}`}>
        <div>
          <h2>Admit the New Patient</h2>
          <a href="#" className="btn_admit">Admit</a>
        </div>
      </div>
    </div>
  )
}

export default NoneDisplay;