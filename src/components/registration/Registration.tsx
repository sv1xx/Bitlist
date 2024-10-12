const Registration = () => {
  return (
    <>
      <div className="pt-[88px] pb-[160px] border-b border-[#252C41] overflow-hidden">
        <div className="max-w-[680px] m-auto w-full relative px-[10px]">
          <div className="flex flex-col gap-[54px] items-center">
            <h1 className="text-[#D5EAFF] text-[48px] font-medium leading-[64px] tracking-[-1px] text-center max-sm:max-w-[420px] max-[580px]:text-[40px] max-[580px]:leading-[50px]">
              Register your account now and start to trade
            </h1>
            <label
              className="max-w-[420px] pl-4 flex items-center bg-gradient-to-b from-[#26314E] to-[#252B3D] gap-[10px] rounded-md max-[580px]:max-w-[450px]"
              htmlFor="reg-input"
            >
              <img src="/src/assets/images/mailsvg.svg" alt="loopa" />
              <input
                name="reg-input"
                placeholder="Example@gmail.com"
                className="w-full outline-none text-white text-[18px] leading-[normal] font-medium bg-inherit"
                type="text"
              />
              <button className="bg-gradient-to-r from-[#66CBF9] to-[#0FB5FF] py-[10px] px-6 rounded-md text-nowrap text-[#08090B] text-[18px] font-medium leading-[normal]">
                Sign in
              </button>
            </label>
          </div>
          <img
            className="absolute top-[-300px] left-[-5px] -z-10"
            src="/src/assets/images/RegDirectLight.png"
            alt="light"
          />
          <img
            className="absolute top-[-300px] left-[-120px] -z-10"
            src="/src/assets/images/RegTopLight.png"
            alt="light"
          />
          <img
            className="absolute top-[-260px] left-[170px] -z-10"
            src="/src/assets/images/RegRightLight.png"
            alt="light"
          />
        </div>
      </div>
    </>
  );
};

export default Registration;
