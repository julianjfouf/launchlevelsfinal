import React from "react";
import blueprint from "../../../public/images/spacepicture.png";
import greenring from "../../../public/assets/bluering.png";
import greentop from "../../../public/assets/bluetop.png";
import greenbottom from "../../../public/assets/bluebottom.png";
import grain from "../../../public/images/grainy.png";
import Image from "next/image";

const ServiceAlt = ({
  number,
  subtitle1,
  desc1,
  title,
  desc2,
  development,
  design,
  subtitle2,
  desc3,
  subtitle3,
  desc4,
}) => {
  return (
    <div className="flex w-full h-full xl:flex-row-reverse flex-col">
      <div className="flex flex-col relative justify-center border-black px-6 md:px-14 overflow-hidden py-12 bg-sky-400">
        <Image
          src={grain}
          className="xl:absolute hidden top-0 left-0 w-full object-contain opacity-10"
        />
        <Image
          src={greentop}
          className="xl:absolute hidden left-0 w-full top-[0] z-[0] object-contain mix-blend-screen saturate-200"
        />
        <Image
          src={greenbottom}
          className="xl:absolute hidden left-0 w-full bottom-0 z-[0] object-contain mix-blend-screen saturate-200"
        />
        <h1 className="sm:text-[240px] text-[200px] leading-[180px] text-center font-bold text-transparent bg-clip-text bg-gradient-to-b from-black z-10">
          {number}
        </h1>
        <div className="flex flex-col text-black z-10 text-center items-center">
          <h2 className="font-bold underline-offset-4 text-xl">{subtitle1}</h2>
          <p className="max-w-lg mb-8 mt-2">{desc1}</p>
          <a className="text-xl flex justify-center font-semibold items-center bg-black shadow-[0px_32px_32px_0px_rgba(0,0,0,0.50)] rounded-lg px-12 py-4 text-white">
            LAUNCH
          </a>
        </div>
      </div>
      <div className="bg-black relative md:px-14 px-6 w-full overflow-hidden text-white flex flex-col justify-between">
        <Image
          className="absolute top-0 left-0 h-full object-contain"
          src={blueprint}
        />
        <div className="z-10 flex flex-col justify-between items-end py-24 text-right">
          <div className="lg:text-8xl md:text-6xl text-4xl flex flex-col items-start leading-tighter before:z-10 z-10 text-white font-bold relative">
            {title}
            <Image className="absolute top-0 right-0 z-[-1]" src={greenring} />
          </div>
          <p className="max-w-lg mt-12 z-10">{desc2}</p>
        </div>
        <div className="w-full h-[2px] bg-white sm:flex hidden z-10"></div>
        <div className="z-10 sm:py-24 pb-24 relative px-4">
          <div className="w-full flex sm:flex-row flex-col justify-around sm:items-start items-end sm:gap-0 gap-12 z-10">
            <div className="max-w-sm z-10 flex flex-col items-end text-right sm:px-4">
              <div className="bg-black absolute top-0 sm:p-2 -mt-2.5 z-10">
                <div className="bg-white w-2.5 h-[2px] z-10 sm:flex hidden"></div>
                <div className="bg-white w-2.5 h-[2px] rotate-90 -translate-y-full sm:flex hidden"></div>
              </div>
              <Image
                src={development}
                className="h-14 w-14 object-contain mb-1"
              />
              <h3 className="font-bold text-sky-400">We are {subtitle2}</h3>
              <p className="">{desc3}</p>
            </div>
            <div className="max-w-sm z-10 flex flex-col items-end text-right sm:px-4">
              <div className="bg-black absolute top-0 sm:p-2 -mt-2.5 z-10">
                <div className="bg-white w-2.5 h-[2px] z-10 sm:flex hidden"></div>
                <div className="bg-white w-2.5 h-[2px] rotate-90 -translate-y-full sm:flex hidden"></div>
              </div>
              <Image src={design} className="h-14 w-14 object-contain mb-1" />
              <h3 className="font-bold text-sky-400">We are {subtitle3}</h3>
              <p className="">{desc4}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceAlt;
