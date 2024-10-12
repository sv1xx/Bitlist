import { cardsData } from "../helpers/cardsData";

const Cards = () => {
  return (
    <>
      <div className="border-gradient">
        <div className="max-w-[1120px] m-auto w-full px-[10px]">
          <div className="py-[90px] grid grid-cols-3 grid-rows-2 gap-x-[100px] gap-y-20 max-md:grid-cols-2 max-sm:grid-cols-1">
            {cardsData.map((e, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col gap-6 max-sm:items-center"
                >
                  <img className="w-[60px] h-[48px]" src={e.icon} alt="icon" />
                  <div className="flex flex-col gap-2 max-w-[300px] max-sm:text-center">
                    <h2 className="text-[#D5EAFF] text-[20px] font-medium leading-[29px]">
                      {e.header}
                    </h2>
                    <p className="text-[#464E62] text-[18px] font-normal leading-[29px]">
                      {e.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
