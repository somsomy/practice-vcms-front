import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {ModalProvider} from "./components/common/popups/context/modalContext";
import Modal from "./components/common/popups/Modal";
import {DisplayProvider} from "./components/dashboard/nav/popups/context/displayContext";

function AppContainer() {
  return (
    <BrowserRouter>
      <DisplayProvider>
        <ModalProvider>
          <Modal/>
          <App/>
        </ModalProvider>
      </DisplayProvider>
    </BrowserRouter>
  )
}

export default AppContainer;