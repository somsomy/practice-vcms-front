import AutoDisplay from "./popups/AutoDisplay";
import DisplaySettings from "./popups/DisplaySettings";

function Nav() {
  return (
    <nav id="nav">
      <div className="gnb">
        <ul>
          <li><a href="#" className="on"><i className="far fa-bell"/> Alarm Silence (2:00)</a></li>
          <li><a href="#">Alarm Events</a></li>
          <li><a href="#">Admit New Patient</a></li>
          <li><AutoDisplay/></li>
          <li><DisplaySettings /></li>
          <li><a href="#">Network Settings</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav;