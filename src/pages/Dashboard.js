import Header from "../components/dashboard/header/Header";
import DisplayContainer from "../components/dashboard/main/DisplayContainer";
import Nav from "../components/dashboard/nav/Nav";
import {DisplayProvider} from "../components/dashboard/nav/popups/context/displayContext";

function Dashboard() {
  return (
    <div id="warp">
      <Header/>
        <Nav/>
      <DisplayProvider>
        <DisplayContainer/>
      </DisplayProvider>
    </div>
  )
}

export default Dashboard;