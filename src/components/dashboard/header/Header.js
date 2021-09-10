import {AppBar} from "@material-ui/core";
import RightMenu from "./right-menu/RightMenu";
function Header() {
  return (
    <header>
      <AppBar position="static">
        <div style={{display: "flex", justifyContent: "space-between", margin: "5px"}}>
          <div>로고</div>
          <RightMenu />
        </div>
      </AppBar>
    </header>
  )
}

export default Header;