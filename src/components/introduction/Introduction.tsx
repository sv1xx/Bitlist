const Introduction = () => {
  return (
    <>
      <div className="border-b border-[#252C41] overflow-hidden">
        <div className="max-w-[1620px] m-auto w-full px-[10px] relative">
          <div className=" flex justify-between items-center max-xl:flex-col">
            <div className="flex flex-col gap-6 pt-[90px] pb-[70px] ">
              <div className="flex max-w-[400px] items-center gap-[10px] px-3 py-2 bg-gradient-to-r from-[#131A2E] to-[#111624] rounded-md ">
                <img src="/src/assets/images/Subtract.svg" alt="icon" />
                <img
                  src="/src/assets/images/DECENTRALIZED CRYPTO PLATFORM.svg"
                  alt="text"
                />
              </div>
              <h1 className="text-[72px] text-[#D5EAFF] leading-[80px] font-medium tracking-[-1,44px] max-w-[695px] max-xl:text-center max-[580px]:text-[40px] max-[580px]:leading-[50px] max-[580px]:max-w-[420px]">
                Buy, trade and store cryptocurrencies
              </h1>
            </div>
            <div className="max-xl:pb-[120px] ">
              <img
                className=""
                src="/src/assets/images/grafic.svg"
                alt="grafic"
              />
            </div>
          </div>
          <img
            className="absolute right-[-300px] top-[-27px] -z-10"
            src="/src/assets/images/illBag.svg"
            alt="sots"
          />
          <img
            className="absolute right-[-200px] top-[-27px]"
            src="/src/assets/images/IntoLight.png"
            alt="light"
          />
          <img
            className="absolute top-[0px] left-[-540px] -z-30"
            src="/src/assets/images/InputLight.png"
            alt="light"
          />
        </div>
      </div>
    </>
  );
};

export default Introduction;
