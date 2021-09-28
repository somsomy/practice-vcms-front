function ZoomIn({zoomIn, onShow}) {

  return (
    <div className="zoom" id="zoom_layout" style={{display: zoomIn && 'block'}}>
      <div className="box_patient">
        <h2>[101] Patient ID: 12345678910 / Mode: V-ACV</h2>
        <a href="" className="z_freeze">Freeze On</a>
        <button className="z_close" id="zoom_close" onClick={onShow} />
        <div className="cate">
          <div className="col_box">
            <h3>Pressure</h3>
            <div className="graph_box"></div>
          </div>
          <div className="col_box">
            <div className="col_3">
              <h3 className="co_01">Ppeak</h3>
              <span className="co_02">42</span>
              <span className="tline co_02">60<br/>10</span>
            </div>
            <div className="col_3">
              <h3 className="co_01">PEEP</h3>
              <span className="co_02">9</span>
              <span className="tline co_02">60<br/>10</span>
            </div>
            <div className="col_3">
              <h3 className="co_01">Pmean</h3>
              <span className="co_02">25</span>
              <span className="tline co_02">60<br/>10</span>
            </div>
          </div>
        </div>
        <div className="cate">
          <div className="col_box">
            <h3>Flow</h3>
            <div className="graph_box"></div>
          </div>
          <div className="col_box">
            <div className="col_3">
              <h3 className="co_03">Vti</h3>
              <span className="co_04">499</span>
              <span className="tline co_04">600<br/>200</span>
            </div>
            <div className="col_3">
              <h3 className="co_03">Vte</h3>
              <span className="co_04">431</span>
              <span className="tline co_04">600<br/>200</span>
            </div>
            <div className="col_3">
              <h3 className="co_03">Vmin</h3>
              <span className="co_04">7.0</span>
              <span className="tline co_04">600<br/>200</span>
            </div>
          </div>
        </div>
        <div className="cate">
          <div className="col_box">
            <h3>Volume</h3>
            <div className="graph_box"></div>
          </div>
          <div className="col_box">
            <div className="col_3">
              <h3 className="co_05">RR</h3>
              <span className="co_06">19</span>
              <span className="tline co_06">30<br/>5</span>
            </div>
            <div className="col_3">
              <h3 className="co_05">I:E</h3>
              <span className="co_06">1:2</span>
              <span className="tline co_06">30<br/>5</span>
            </div>
            <div className="col_3">
              <h3 className="co_07">O2</h3>
              <span className="co_08">21</span>
              <span className="tline co_08">30<br/>5</span>
            </div>
          </div>
        </div>
      </div>
      <div className="z_btns">
        <ul>
          <li><a href="">Mode: V-ACV</a></li>
          <li><a href="">Vti = 100</a></li>
          <li><a href="">PR = 20</a></li>
          <li><a href="">Tinsp = 0.75</a></li>
          <li><a href="">Tpause = 0.0</a></li>
          <li><a href="">PEEP = 6</a></li>
          <li><a href="">02 = 21</a></li>
          <li><a href="">Additional Settings</a></li>
        </ul>
      </div>
    </div>
  )
}

export default ZoomIn;