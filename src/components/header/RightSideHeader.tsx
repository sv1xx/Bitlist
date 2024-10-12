import { useState } from "react";

const RightSideHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex items-center">
        <nav className="max-[1350px]:hidden">
          <ul className="flex gap-8">
            <li className="">
              <a
                href=""
                className="text-[#464E62] text-[18px] leading-[normal] font-medium"
              >
                Trade
              </a>
            </li>
            <li className="">
              <a
                href=""
                className="text-[#464E62] text-[18px] leading-[normal] font-medium"
              >
                P2P
              </a>
            </li>
            <li className="">
              <a
                href=""
                className="text-[#464E62] text-[18px] leading-[normal] font-medium"
              >
                Partners
              </a>
            </li>
            <li className="">
              <a
                href=""
                className="text-[#464E62] text-[18px] leading-[normal] font-medium"
              >
                Mining
              </a>
            </li>
            <li className="">
              <a
                href=""
                className="text-[#464E62] text-[18px] leading-[normal] font-medium"
              >
                Academy
              </a>
            </li>
          </ul>
        </nav>
        <div className="border-l h-[24px] rounded-sm border-slate-800 ml-[30px] mr-10 max-[1350px]:hidden"></div>
        <div className="flex gap-2 max-[1350px]:hidden">
          <button className="bg-gradient-to-r from-[#26314E] to-[#1E253C] py-[10px] px-6 rounded-md text-[#CEE7FF] text-[18px] font-medium leading-[normal]">
            Register
          </button>
          <button className="bg-gradient-to-r from-[#66CBF9] to-[#0FB5FF] py-[10px] px-6 rounded-md text-[#08090B] text-[18px] font-medium leading-[normal]">
            Log in
          </button>
        </div>

        <div className="hidden max-[1350px]:block">
          <button
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsOpen(true)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </button>
          <div className={isOpen ? "showMenuNav" : "hideMenuNav"}>
            <button
              className="absolute top-0 right-0 px-[10px] py-[30px]"
              onClick={() => setIsOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <ul className="flex flex-col items-center justify-between min-h-[250px]">
              <label
                className="max-w-[400px] flex items-center bg-gradient-to-b from-[#26314E] to-[#252B3D] py-[10px] pl-4 pr-6 gap-2 rounded-md"
                htmlFor="search-input"
              >
                <img src="/src/assets/images/search.svg" alt="loopa" />
                <input
                  name="search-input"
                  placeholder="Search"
                  className="w-full outline-none text-white text-[18px] leading-[normal] font-medium bg-inherit"
                  type="text"
                />
              </label>
              <li className="">
                <a
                  href=""
                  className="text-[#464E62] text-[18px] leading-[normal] font-medium"
                >
                  Trade
                </a>
              </li>
              <li className="">
                <a
                  href=""
                  className="text-[#464E62] text-[18px] leading-[normal] font-medium"
                >
                  P2P
                </a>
              </li>
              <li className="">
                <a
                  href=""
                  className="text-[#464E62] text-[18px] leading-[normal] font-medium"
                >
                  Partners
                </a>
              </li>
              <li className="">
                <a
                  href=""
                  className="text-[#464E62] text-[18px] leading-[normal] font-medium"
                >
                  Mining
                </a>
              </li>
              <li className="">
                <a
                  href=""
                  className="text-[#464E62] text-[18px] leading-[normal] font-medium"
                >
                  Academy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default RightSideHeader;
