import { useContext } from 'react';
import { ModalContext } from './ModalContext';

export interface modalReturn {
    isOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
}

export const useModal = (): modalReturn => {
    const { isOpen, setIsOpen } = useContext(ModalContext);
    const closeModal = () => {
        setIsOpen(false);
    };
    const openModal = () => {
        setIsOpen(true);
    };

    return { isOpen, openModal, closeModal };
};
