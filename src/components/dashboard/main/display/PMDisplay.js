function PMDisplay({row, col}) {
  return (
    <div className={`col col${col}`}>
      <div className={`box_patient row${row}`}>
        <div className="cate">
          <div className="col_box">
            <h3>II</h3>
            <div className="graph_box"></div>
          </div>
          <div className="col_box">
            <div className="col_3">
              <h3 className="co_01">HR</h3>
              <span className="co_02">72</span>
            </div>
            <div className="col_3">
              <h3 className="co_01">ST</h3>
              <span className="tline co_02">+0.09<br/>+0.09</span>
            </div>
            <div className="col_3">
              <h3 className="co_09">TEMP</h3>
              <span className="tline co_10">36.5<br/>36.5</span>
            </div>
          </div>
        </div>
        <div className="cate">
          <div className="col_box">
            <h3>Sp02</h3>
            <div className="graph_box"></div>
          </div>
          <div className="col_box">
            <div className="col_3">
              <h3 className="co_03">Sp02</h3>
              <span className="co_04">98</span>
            </div>
            <div className="col_3">
              <h3 className="co_07">IBP1</h3>
              <span className="tline co_08">119/79<br/>(92)</span>
            </div>
            <div className="col_3">
              <h3 className="co_07">IBP1</h3>
              <span className="tline co_08">119/79<br/>(92)</span>
            </div>
          </div>
        </div>
        <div className="cate">
          <div className="col_box">
            <h3>RESP</h3>
            <div className="graph_box"></div>
          </div>
          <div className="col_box">
            <div className="col_3">
              <h3 className="co_05">RESP</h3>
              <span className="co_06">13</span>
            </div>
            <div className="col_3">
              <h3 className="co_09">C02</h3>
              <span className="co_10">30</span>
            </div>
            <div className="col_3">
              <h3 className="co_09">NIBP</h3>
              <span className="tline co_10">121/80<br/>(94)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
)
}

export default PMDisplay;