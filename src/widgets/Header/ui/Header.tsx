import { Logo } from "shared/ui/Logo/Logo";

export const Header = () => {
  return (
    <header className="mb-[50px]">
      <div className="main-container">
        <div className="flex justify-center items-center py-[20px] bg-mainBg-inv text-mainBg rounded-b-stdRadius h-(--height-header)">
          <Logo />
        </div>
      </div>
    </header>
  );
};
