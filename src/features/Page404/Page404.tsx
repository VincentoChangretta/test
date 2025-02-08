import { Button } from "shared/ui/Button/Button";

export const Page404 = () => {
  return (
    <div className="flex justify-center items-center h-(--height-minusHeader)">
      <div className="flex flex-col gap-[30px] items-center">
        <div className="text-9xl font-extrabold">404</div>
        <Button
          className="bg-mainBg-inv text-mainBg"
          onClick={() => window.location.reload()}
        >
          Перезагрузить
        </Button>
      </div>
    </div>
  );
};
