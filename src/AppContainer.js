import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {DialogProvider} from "./components/common/popups/context/dialogContext";
import Dialog from "./components/common/popups/Diglog"
import {PopoverProvider} from "./components/common/popups/context/popoverContext";
import PopOver from "./components/common/popups/Popover";

function AppContainer() {
  return (
    <BrowserRouter>
      <DialogProvider>
        <PopoverProvider>
          <Dialog />
          <PopOver />
          <App/>
        </PopoverProvider>
      </DialogProvider>
    </BrowserRouter>
  )
}

export default AppContainer;