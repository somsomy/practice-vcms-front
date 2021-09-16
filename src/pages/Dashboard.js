import Header from "../components/dashboard/header/Header";
import DisplayContainer from "../components/dashboard/main/DisplayContainer";
import Nav from "../components/dashboard/nav/Nav";

function Dashboard() {
  return (
    <div id="warp">
      <Header/>
      <Nav />
      <DisplayContainer/>
    </div>
  )
}

export default Dashboard;