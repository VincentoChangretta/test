import { createContext } from "react";
import { modalDataTypes } from "../ui/ModalProvider";
import { SeminarData } from "app/server/config/config";

export interface ModalContextProps {
  isOpen?: boolean;
  setIsOpen?: (prev: boolean) => void;
  modalData?: modalDataTypes;
  setModalData?: (prev: modalDataTypes) => void;
  modalContent?: SeminarData;
  setModalContent?: (prev: SeminarData) => void;
}

export const ModalContext = createContext<ModalContextProps>({});
