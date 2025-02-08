import { FC, ReactNode, useState } from "react";
import { ModalContext } from "../lib/ModalContext";
import { SeminarData } from "app/server/config/config";

export enum modalDataTypes {
  DELETE = "delete",
  EDIT = "edit",
}

interface ModalProviderProps {
  children: ReactNode;
}

export const ModalProvider: FC<ModalProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [modalData, setModalData] = useState<modalDataTypes | null>(null);
  const [modalContent, setModalContent] = useState<SeminarData | null>(null);

  return (
    <ModalContext.Provider
      value={{
        isOpen,
        setIsOpen,
        modalData,
        setModalData,
        modalContent,
        setModalContent,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
