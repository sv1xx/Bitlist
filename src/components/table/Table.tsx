import { tableData } from "../helpers/tableData";

const Table = () => {
  return (
    <>
      <div className="border-b border-[#252C41] bg-[#0B0F15]">
        <div className="max-w-[1620px] m-auto w-full relative px-[10px]">
          <label
            className="relative left-0 top-[-22px] max-w-[420px] pl-4 flex items-center bg-gradient-to-b from-[#26314E] to-[#252B3D]  gap-[10px] rounded-md "
            htmlFor="email-input"
          >
            <img src="/src/assets/images/mailsvg.svg" alt="loopa" />
            <input
              name="email-input"
              placeholder="Example@gmail.com"
              className="w-full outline-none text-white text-[18px] leading-[normal] font-medium bg-inherit"
              type="text"
            />
            <button className="bg-gradient-to-r from-[#66CBF9] to-[#0FB5FF] py-[10px] px-6 rounded-md text-nowrap text-[#08090B] text-[18px] font-medium leading-[normal]">
              Sign in
            </button>
          </label>
          <div className="py-[100px] flex flex-col gap-4">
            <div className="overflow-auto">
              <table className="bg-[#0F151E] rounded-2xl w-full">
                <thead className="">
                  <tr className="border-b border-[#222D3E]">
                    <td className="p-6 text-[#6D799C] text-[16px] leading-[normal] font-medium">
                      Asset
                    </td>
                    <td className="text-[#6D799C] text-[16px] leading-[normal] font-medium">
                      Price
                    </td>
                    <td className="text-center text-[#6D799C] text-[16px] leading-[normal] font-medium">
                      Change
                    </td>
                    <td className="text-[#6D799C] text-[16px] leading-[normal] font-medium">
                      Volume
                    </td>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((e, index) => {
                    return (
                      <tr
                        key={index}
                        className="border-b border-[#222D3E] items-center last:border-none"
                      >
                        <td className="pl-6 py-5 flex items-center gap-5 w-[890px] max-xl:w-[600px] max-lg:w-[400px]">
                          <img src={e.icon} alt="icon" />
                          <div className="flex items-center gap-2">
                            <p className="text-[#C7E1FF] text-[20px] font-normal leading-[17px] tracking-[-0.5px] items-center">
                              {e.name}
                            </p>
                            <p className="text-[#525A71] text-[16px] font-norma leading-[normal] relative top-[1px]">
                              {e.postfix}
                            </p>
                          </div>
                        </td>
                        <td className=" w-[80px] ">
                          <div className="flex gap-1 items-center text-[#C7E1FF] text-[20px] leading-[17px] font-normal tracking-[-0.5px]">
                            <span className="text-[#C7E1FF] text-[16px] font-normal leading-[17px] tracking-[-0.5px]">
                              $
                            </span>

                            {e.price}
                          </div>
                        </td>
                        <td className="w-[80px] text-center pl-[90px] pr-[80px]">
                          <div className="flex gap-1 items-center text-[#58F0A7] text-[20px] leading-[17px] font-normal tracking-[-0.5px]">
                            {e.change}
                            <span className="">%</span>
                          </div>
                        </td>
                        <td className="w-[120px]">
                          <div className="flex items-center text-[#C7E1FF] text-[20px] leading-[17px] font-normal tracking-[-0.5px]">
                            {e.volume}
                            <span className="text-[#C7E1FF] text-[16px] font-normal leading-[17px] tracking-[-0.5px] relative top-[1px]">
                              M
                            </span>
                          </div>
                        </td>
                        <td>
                          <button className="px-4 py-[6px] mr-6 ml-[100px] text-[#2FBDFC] text-[18px] leading-[normal] font-medium border border-[#2FBDFC] rounded-md">
                            Trade
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <button className="px-6 py-[10px] text-center text-[#C7E1FF] text-[18px] font-medium leading-[normal] rounded-lg bg-gradient-to-b from-[#26314E] to-[#1E253C]">
              All assets
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Table;
