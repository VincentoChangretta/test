import { Button } from "shared/ui/Button/Button";

export const ErrorPage = () => {
  return (
    <div className="fixed inset-0 z-[9999] bg-mainBg text-mainBg-inv flex justify-center items-center">
      <div className="flex flex-col gap-[30px] items-center">
        <p className="text-5xl font-extrabold">Что-то пошло не так :(</p>
        <Button
          className="max-w-[250px] bg-mainBg-inv text-mainBg"
          onClick={() => window.location.reload()}
        >
          Перезагрузить
        </Button>
      </div>
    </div>
  );
};
