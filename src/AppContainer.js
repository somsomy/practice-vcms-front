import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {DialogProvider} from "./components/common/popups/context/dialogContext";
import Dialog from "./components/common/popups/Diglog"

function AppContainer() {
  return (
    <BrowserRouter>
      <DialogProvider>
          <Dialog />
          <App/>
      </DialogProvider>
    </BrowserRouter>
  )
}

export default AppContainer;