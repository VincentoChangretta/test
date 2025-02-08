import { ModalContext, useModal } from "app/provider/modal";
import { modalDataTypes } from "app/provider/modal/ui/ModalProvider";
import { SeminarData } from "app/server/config/config";
import { FC, useContext } from "react";
import { Button } from "shared/ui/Button/Button";

interface SeminarCardProps {
  data: SeminarData;
}

export const SeminarCard: FC<SeminarCardProps> = (props) => {
  const { data } = props;
  const { openModal } = useModal();
  const { setModalData, setModalContent } = useContext(ModalContext);

  const handleOpenModal = (type: modalDataTypes) => {
    openModal();
    setModalData(type);
    setModalContent(data);
  };

  return (
    <article className="flex flex-col justify-between w-[49%] p-[30px] rounded-stdRadius bg-mainBg-inv text-mainBg cursor-pointer transition-all hover:scale-[0.98]">
      <div className="mb-3">
        <div className="flex justify-between">
          <div className="flex items-center gap-[30px] mb-[30px] font-extrabold">
            <p>{data.date}</p>
            <p>{data.time}</p>
          </div>
          <div className="flex items-center justify-end gap-[20px]">
            <Button
              className="flex justify-center items-center w-[50px] h-[50px]"
              onClick={() => handleOpenModal(modalDataTypes.EDIT)}
            >
              Р
            </Button>
            <Button
              className="flex justify-center items-center w-[50px] h-[50px]"
              onClick={() => handleOpenModal(modalDataTypes.DELETE)}
            >
              X
            </Button>
          </div>
        </div>
        <h3 className="text-4xl font-extrabold text-pretty">{data.title}</h3>
      </div>
      <div className="flex justify-between items-start mt-auto gap-2.5">
        <p>{data.description}</p>
        <div className="mb-[15px] max-w-[150px]">
          <img className="img" src={data.photo} alt={data.title} />
        </div>
      </div>
    </article>
  );
};
