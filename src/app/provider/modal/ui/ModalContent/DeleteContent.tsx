import { SeminarData, serverURL } from "app/server/config/config";
import { setSeminars } from "app/store/Slices/seminarSlices";
import { RootState } from "app/store/store";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromID } from "shared/api/lib/deleteFromId";
import { Button } from "shared/ui/Button/Button";

interface DeleteContentProps {
  onClose?: () => void;
  modalContent?: SeminarData;
}

export const DeleteContent: FC<DeleteContentProps> = (props) => {
  const dispatch = useDispatch();
  const { onClose, modalContent } = props;
  const seminars = useSelector((state: RootState) => state.seminars.seminars);

  const handleDeleteFromId = () => {
    const filteredSeminars = seminars.filter(
      (seminar) => seminar.id !== modalContent.id
    );
    dispatch(setSeminars(filteredSeminars));
    deleteFromID(serverURL, modalContent.id);
    onClose();
  };

  return (
    <div>
      <h3 className="text-4xl text-center mb-[50px] font-extrabold">
        Подтвердите удаление
      </h3>
      <div className="flex justify-center items-center gap-[20px]">
        <Button onClick={onClose} className="bg-mainBg-inv text-mainBg">
          Назад
        </Button>
        <Button
          onClick={handleDeleteFromId}
          className="bg-mainBg-inv text-mainBg"
        >
          Удалить
        </Button>
      </div>
    </div>
  );
};
