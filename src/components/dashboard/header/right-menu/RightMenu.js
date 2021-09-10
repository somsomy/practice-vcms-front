import Clock from "react-live-clock";
import LoginInfo from "./LoginInfo";
import VolumeButton from "./VolumeButton";

function RightMenu() {
  return (
    <div style={{minWidth: "25%", display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "black"}}>
      <VolumeButton />
      <Clock format={'DD/MM/YYYY HH:mm:ss'} ticking={true} timezone={'Asia/Seoul'}/>
      <LoginInfo />
    </div>
  )
}

export default RightMenu;