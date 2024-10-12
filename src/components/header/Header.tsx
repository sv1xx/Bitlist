import LeftSideHeader from "./LeftSideHeader";
import RightSideHeader from "./RightSideHeader";

const Header = () => {
  return (
    <>
      <header className="py-[30px] relative bg-[#08090B]">
        <div className="max-w-[1620px] m-auto w-full px-[10px]">
          <div className="flex justify-between">
            <LeftSideHeader />
            <RightSideHeader />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
