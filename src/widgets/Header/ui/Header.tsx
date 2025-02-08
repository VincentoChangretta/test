import { Logo } from "shared/ui/Logo/Logo";

export const Header = () => {
  return (
    <header className="mb-(--margin-header)">
      <div className="main-container">
        <div className="flex justify-center items-center py-[20px] text-mainBg-inv rounded-b-stdRadius h-(--height-header)">
          <Logo />
        </div>
      </div>
    </header>
  );
};
