import BitlesLeft from "./BitlesLeft";
import BitlesRight from "./BitlesRight";

const Bitles = () => {
  return (
    <>
      <div className="border-gradient overflow-hidden">
        <div className="max-w-[1480px] m-auto w-full px-[10px] relative">
          <div className="pt-[90px] flex gap-[220px] max-lg:flex-col max-lg:gap-[100px]">
            <BitlesLeft />
            <BitlesRight />
          </div>
          <img
            className="absolute top-[-350px] left-[-650px]"
            src="/src/assets/images/BitlesLeftLight.png"
            alt="light"
          />
          <img
            className="absolute top-[10px] right-[70px] -z-10"
            src="/src/assets/images/BitlesRightLight.svg"
            alt="light"
          />
        </div>
      </div>
    </>
  );
};

export default Bitles;
