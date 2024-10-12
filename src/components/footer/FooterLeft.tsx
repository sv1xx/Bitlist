const FooterLeft = () => {
  return (
    <>
      <div className="max-[580px]:items-center max-[580px]:flex max-[580px]:flex-col">
        <a href="" className="">
          <img className="" src="/src/assets/images/logoDark.svg" alt="logo" />
        </a>
        <ul className="flex items-center gap-4 pt-[48px] pb-[68px] max-[580px]:py-[20px]">
          <li className="">
            <a href="" className="">
              <img
                className=""
                src="/src/assets/images/telegram.svg"
                alt="telegram"
              />
            </a>
          </li>
          <li className="">
            <a href="" className="">
              <img
                className=""
                src="/src/assets/images/facebook.svg"
                alt="facebook"
              />
            </a>
          </li>
          <li className="">
            <a href="" className="">
              <img
                className=""
                src="/src/assets/images/twitter.svg"
                alt="twitter"
              />
            </a>
          </li>
        </ul>
        <div className="flex gap-2">
          <button className="bg-gradient-to-r from-[#26314E] to-[#1E253C] py-[10px] px-6 rounded-md text-[#CEE7FF] text-[18px] font-medium leading-[normal]">
            Register
          </button>
          <button className="bg-gradient-to-r from-[#66CBF9] to-[#0FB5FF] py-[10px] px-6 rounded-md text-[#08090B] text-[18px] font-medium leading-[normal]">
            Log in
          </button>
        </div>
      </div>
    </>
  );
};

export default FooterLeft;
