import Clock from "react-live-clock";
import LoginInfo from "./LoginInfo";

function HeaderMenu() {
  return (
    <div className="top_item">
      <ul>
        <li>
          <div>
            <button className="btn_volume"><i className="fas fa-volume-down"/>5</button>
          </div>
        </li>
        <li>
          <div>
            <i className="far fa-clock"/><Clock format={'DD/MM/YYYY HH:mm:ss'} ticking={true} timezone={'Asia/Seoul'}/>
          </div>
        </li>
        <li>
          <LoginInfo/>
        </li>
      </ul>
    </div>
  )
}

export default HeaderMenu;