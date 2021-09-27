function ClickMenu() {
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

export default ClickMenu;
