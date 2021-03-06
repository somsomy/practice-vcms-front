import './assets/css/common.css'
import './assets/css/layout.css'
import './assets/vendor/fontawesome/css/all.min.css'

import {Route, Switch} from "react-router-dom";
import Login from "./pages/Login";
import Join from "./pages/Join";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path={"/"} component={Login} />
        <Route path={"/join"} component={Join} />
        <Route path={"/dashboard"} component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;
