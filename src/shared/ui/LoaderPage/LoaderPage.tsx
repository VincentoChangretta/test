import { Loader } from "shared/ui/Loader/Loader";

export const LoaderPage = () => {
  return (
    <div className="min-h-(--height-minusHeader) flex justify-center items-center">
      <Loader />
    </div>
  );
};
