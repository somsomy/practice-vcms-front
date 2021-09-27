import Header from "../components/dashboard/header/Header";
import DisplayContainer from "../components/dashboard/main/DisplayContainer";
import Nav from "../components/dashboard/nav/Nav";
import {DisplayContext} from "../components/dashboard/nav/popups/context/displayContext";

function Dashboard() {
  return (
    <div id="warp">
      <Header/>
      <Nav/>
      <DisplayContext.Consumer>
        {
          ({displayArray}) => <DisplayContainer displayArray={displayArray}/>
        }
      </DisplayContext.Consumer>
    </div>
  )
}

export default Dashboard;