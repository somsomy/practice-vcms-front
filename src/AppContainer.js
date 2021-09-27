import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {ModalProvider} from "./components/common/popups/context/modalContext";
import Modal from "./components/common/popups/Modal";

function AppContainer() {
  return (
    <BrowserRouter>
      <ModalProvider>
          <Modal />
          <App/>
      </ModalProvider>
    </BrowserRouter>
  )
}

export default AppContainer;