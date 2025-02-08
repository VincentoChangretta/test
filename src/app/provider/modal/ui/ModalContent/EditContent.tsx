import { SeminarData, serverURL } from "app/server/config/config";
import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useInput } from "shared/lib/hooks/useInput";
import { updateSeminar } from "app/store/Slices/seminarSlices";
import { updateOnServer } from "shared/api/lib/updateOnServer";
import { Button } from "shared/ui/Button/Button";

interface EditContentProps {
  onClose?: () => void;
  modalContent?: SeminarData;
}

export const EditContent: FC<EditContentProps> = ({
  onClose,
  modalContent,
}) => {
  const dispatch = useDispatch();
  const {
    value: date,
    onChange: onDateChange,
    setValue: setDate,
  } = useInput(modalContent?.date || "");
  const {
    value: time,
    onChange: onTimeChange,
    setValue: setTime,
  } = useInput(modalContent?.time || "");
  const {
    value: title,
    onChange: onTitleChange,
    setValue: setTitle,
  } = useInput(modalContent?.title || "");
  const {
    value: description,
    onChange: onDescriptionChange,
    setValue: setDescription,
  } = useInput(modalContent?.description || "");
  const {
    value: photo,
    onChange: onPhotoChange,
    setValue: setPhoto,
  } = useInput(modalContent?.photo || "");

  useEffect(() => {
    if (modalContent) {
      setDate(modalContent.date);
      setTime(modalContent.time);
      setTitle(modalContent.title);
      setDescription(modalContent.description);
      setPhoto(modalContent.photo);
    }
  }, [modalContent, setDate, setTime, setTitle, setDescription, setPhoto]);

  const handleSave = () => {
    if (modalContent) {
      const updatedSeminar = {
        ...modalContent,
        date,
        time,
        title,
        description,
        photo,
      };
      dispatch(updateSeminar(updatedSeminar));
      updateOnServer(serverURL, updatedSeminar.id, updatedSeminar);
    }
    if (onClose) onClose();
  };

  return (
    <div>
      <h3 className="text-3xl font-extrabold mb-[20px]">
        Редактирование семинара
      </h3>
      <div className="flex flex-col gap-2.5 text-2xl">
        <input
          className="bg-mainBg-inv p-3 text-mainBg"
          type="text"
          value={date}
          onChange={onDateChange}
        />
        <input
          className="bg-mainBg-inv p-3 text-mainBg"
          type="text"
          value={time}
          onChange={onTimeChange}
        />
        <input
          className="bg-mainBg-inv p-3 text-mainBg"
          type="text"
          value={title}
          onChange={onTitleChange}
        />
        <input
          className="bg-mainBg-inv p-3 text-mainBg"
          type="text"
          value={description}
          onChange={onDescriptionChange}
        />
        <input
          className="bg-mainBg-inv p-3 text-mainBg"
          type="text"
          value={photo}
          onChange={onPhotoChange}
        />
      </div>
      <Button
        onClick={handleSave}
        className="bg-mainBg-inv text-mainBg max-w-[300px] mt-[15px]"
      >
        Сохранить изменения
      </Button>
    </div>
  );
};
