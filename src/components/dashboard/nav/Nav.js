import {useContext} from "react";
import {DialogContext} from "../../common/popups/context/dialogContext";

function Nav() {
  const {actions} = useContext(DialogContext)

  return (
    <nav id="nav">
      <div className="gnb">
        <ul>
          <li><a href="#" className="on"><i className="far fa-bell"/> Alarm Silence (2:00)</a></li>
          <li><a href="#">Alarm Events</a></li>
          <li><a href="#">Admit New Patient</a></li>
          <li><a href="#">Auto Display</a></li>
          <li><a href="#">Display Settings</a></li>
          <li><a href="#">Network Settings</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav;