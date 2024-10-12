import FooterLeft from "./FooterLeft";
import FooterRight from "./FooterRight";

const Footer = () => {
  return (
    <>
      <div className="pb-8">
        <div className="max-w-[1620px] m-auto w-full px-[10px]">
          <div className="flex flex-col gap-[64px] max-[580px]:gap-[80px]">
            <div className="flex justify-between pt-[60px] max-[580px]:flex-col max-[580px]:gap-[60px]">
              <FooterLeft />
              <FooterRight />
            </div>
            <div className="self-center">
              <p className="text-[#27314A] text-[18px] font-medium leading-[29px]">
                Bitlist© All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
