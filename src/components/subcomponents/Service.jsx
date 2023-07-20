import React from "react";
import blueprint from "../../../public/images/blueprint.png";
import greenring from "../../../public/assets/greenring.png";
import greentop from "../../../public/assets/greentop.png";
import greenbottom from "../../../public/assets/greenbottom.png";
import grain from "../../../public/images/grainy.png";
import Image from "next/image";


const Service = ({
  number,
  subtitle1,
  desc1,
  title,
  desc2,
  subtitle2,
  desc3,
  subtitle3,
  desc4,
  icon1,
  icon2,
}) => {
  return (
    <div className="flex xl:flex-row flex-col w-full h-full">
      <div className="flex flex-col relative justify-center border-black px-6 md:px-14 overflow-hidden py-12 bg-green-500">
        <Image
          src={grain}
          className="absolute xl:visible invisible top-0 left-0 w-full object-contain opacity-10"
        />
        <Image
          src={greentop}
          className="absolute xl:visible invisible left-0 w-full top-[-35%] object-contain mix-blend-screen saturate-200 z-10"
        />
        <Image
          src={greenbottom}
          className="absolute xl:visible invisible left-0 w-full bottom-0 object-contain mix-blend-screen saturate-200 z-10"
        />
        <h1
          className={`sm:text-[240px] text-[200px] leading-[180px] text-center font-bold text-transparent bg-clip-text bg-gradient-to-b z-10 from-black`}
        >
          {number}
        </h1>
        <div className="flex flex-col text-black z-10 text-center items-center">
          <h2 className="font-bold underline-offset-4 text-xl">{subtitle1}</h2>
          <p className="max-w-lg mb-8 mt-2">{desc1}</p>
          <a
            href="#contact"
            className="md:text-4xl flex justify-center font-semibold items-center bg-black shadow-[0px_32px_32px_0px_rgba(0,0,0,0.00)] px-6 py-3 rounded-full bg-black/60 text-white"
          >
            LAUNCH
          </a>
        </div>
      </div>
      <div
        id={number == "01" ? `web` : `soc`}
        className="bg-black relative md:px-14 px-6 w-full overflow-hidden text-white flex flex-col justify-between"
      >
        <Image
          className="absolute -right-14 min-h-[100%] object-contain bottom-0 opacity-30"
          src={blueprint}
        />
        <div className="z-10 flex flex-col justify-between items-start py-24">
          <div className="lg:text-8xl md:text-6xl text-4xl mainTitle flex flex-col items-start leading-tighter before:z-10 z-10 text-white font-bold relative">
            {title}
            <Image className="absolute top-0 z-[-1]" src={greenring} />
          </div>
          <p className="max-w-lg mt-12 z-10 md:text-base">{desc2}</p>
        </div>
        <div className="w-full h-[2px] bg-white sm:flex hidden z-10"></div>
        <div className="z-10 sm:py-24 pb-24 relative">
          <div className="w-full flex sm:flex-row flex-col justify-around sm:gap-0 gap-12 z-10">
            <div className="max-w-sm z-10 flex flex-col sm:px-4">
              <div className="bg-black absolute top-0 p-2 -mt-2.5 z-10">
                <div className="bg-white w-2.5 h-[2px] z-10 sm:flex hidden"></div>
                <div className="bg-white w-2.5 h-[2px] rotate-90 -translate-y-full sm:flex hidden"></div>
              </div>
              <Image src={icon1} className="h-14 w-14 object-contain mb-1" />
              <h3 className="font-bold text-green-500">
                We are <span className="uppercase">{subtitle2}</span>
              </h3>
              <p className="">{desc3}</p>
            </div>
            <div className="max-w-sm z-10 flex flex-col sm:px-4">
              <div className="bg-black absolute top-0 p-2 -mt-2.5 z-10">
                <div className="bg-white w-2.5 h-[2px] z-10 sm:flex hidden"></div>
                <div className="bg-white w-2.5 h-[2px] rotate-90 -translate-y-full sm:flex hidden"></div>
              </div>
              <Image src={icon2} className="h-14 w-14 object-contain mb-1" />
              <h3 className="font-bold text-green-500">
                We are <span className="uppercase">{subtitle3}</span>
              </h3>
              <p className="">{desc4}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
