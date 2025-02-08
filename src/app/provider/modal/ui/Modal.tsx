import { FC, ReactNode, useEffect, useRef } from "react";
import { DeleteContent } from "./ModalContent/DeleteContent";
import { Button } from "shared/ui/Button/Button";
import { modalDataTypes } from "./ModalProvider";
import { SeminarData } from "app/server/config/config";
import { EditContent } from "./ModalContent/EditContent";

interface modalProps {
  isOpen: boolean;
  onClose: () => void;
  modalData: modalDataTypes;
  modalContent?: SeminarData;
  children?: ReactNode;
}

export const Modal: FC<modalProps> = (props) => {
  const { isOpen, onClose, modalData, modalContent } = props;

  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const closeModal = (e: MouseEvent) => {
      if (modalRef && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    document.addEventListener("mouseup", closeModal);
    return () => document.removeEventListener("mouseup", closeModal);
  }, []);

  const setModalContent = (modalData: modalDataTypes): ReactNode => {
    if (modalData === modalDataTypes.DELETE) {
      return <DeleteContent onClose={onClose} modalContent={modalContent} />;
    } else if (modalData === modalDataTypes.EDIT) {
      return <EditContent onClose={onClose} modalContent={modalContent} />;
    }
  };

  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[9999] flex justify-center items-center backdrop-blur-[20px]">
      <div
        ref={modalRef}
        className="relative p-[30px] pr-[80px] rounded-stdRadius w-full max-w-[720px] bg-mainBg text-mainBg-inv border-2 border-mainBg-inv"
        onClick={(e) => e.stopPropagation()}
      >
        <Button
          className="absolute flex justify-center items-center top-[20px] right-[20px] w-[40px] h-[40px] rounded-full bg-mainBg-inv text-mainBg font-extrabold"
          onClick={onClose}
        >
          X
        </Button>
        <div>{setModalContent(modalData)}</div>
      </div>
    </div>
  );
};
