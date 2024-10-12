const LeftSideHeader = () => {
  return (
    <>
      <div className="flex items-center">
        <a href="" className="">
          <img className="" src="/src/assets/images/logo.svg" alt="logo" />
        </a>
        <div className="border-l h-[24px] rounded-sm border-slate-800 ml-[30px] mr-10 max-[1350px]:hidden"></div>
        <label
          className="max-w-[400px] flex items-center bg-gradient-to-b from-[#26314E] to-[#252B3D] py-[10px] pl-4 pr-6 gap-2 rounded-md max-[1350px]:hidden"
          htmlFor="search-input"
        >
          <img src="/src/assets/images/search.svg" alt="loopa" />
          <input
            name="search-input"
            placeholder="Search"
            className="w-full outline-none text-white text-[18px] leading-[normal] font-medium bg-inherit max-[1350px]:hidden"
            type="text"
          />
        </label>
      </div>
    </>
  );
};

export default LeftSideHeader;
