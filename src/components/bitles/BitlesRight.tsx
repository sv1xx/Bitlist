import { bitlesData } from "../helpers/bitlesData";

const BitlesRight = () => {
  return (
    <>
      <div className="grid grid-cols-2 grid-rows-3 gap-x-[100px] gap-y-[70px] pb-[90px] max-lg:gap-x-[80px]">
        {bitlesData.map((e, index) => {
          return (
            <div key={index} className="items-center self-center flex flex-col">
              <img src={e.href} alt="logo" />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default BitlesRight;
