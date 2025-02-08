import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "app/App";
import { ModalProvider } from "app/provider/modal";
import { Provider } from "react-redux";
import { store } from "app/store/store";
import "app/styles/index.css";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Provider store={store}>
      <ModalProvider>
        <App />
      </ModalProvider>
    </Provider>
  </BrowserRouter>
);
