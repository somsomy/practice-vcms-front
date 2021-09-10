import Header from "../components/dashboard/header/Header";
import DisplayContainer from "../components/dashboard/display/DisplayContainer";
import Nav from "../components/dashboard/nav/Nav";

function Dashboard() {
  return (
    <div>
      <Header/>
      <Nav />
      <DisplayContainer/>
    </div>
  )
}

export default Dashboard;