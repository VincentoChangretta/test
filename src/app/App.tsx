import { Footer } from "widgets/Footer";
import { Header } from "widgets/Header";
import { AppRouter } from "./provider/router/ui/AppRouter";
import { Modal, ModalContext, useModal } from "./provider/modal";
import { useContext } from "react";

function App() {
  const { isOpen, closeModal } = useModal();
  const { modalData, modalContent } = useContext(ModalContext);

  return (
    <div className="app">
      <Header />
      <main className="grow">
        <AppRouter />
        {isOpen && (
          <Modal
            isOpen={isOpen}
            onClose={closeModal}
            modalData={modalData}
            modalContent={modalContent}
          />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
