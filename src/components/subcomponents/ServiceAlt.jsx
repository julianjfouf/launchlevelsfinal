import React from "react";
import blueprint from "../../../public/images/spacepicture.png";
import greenring from "../../../public/assets/bluering.png";
import greentop from "../../../public/assets/bluetop.png";
import greenbottom from "../../../public/assets/bbg.png";
import grain from "../../../public/images/grainy.png";
import Image from "next/image";
import localFont from "next/font/local";

const thunder = localFont({
  src: "../../../public/fonts/Thunder-LC.woff",
});

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
      <div
        style={{
          background:
            "linear-gradient(180deg, #216A85 0%, #1E2B2A 100%)",
        }}
        className="flex flex-col relative justify-center px-6 md:px-14 overflow-hidden py-12"
      >
        <Image
          src={greenbottom}
          className="absolute xl:visible invisible left-0 w-full top-1/2 -translate-y-1/2 z-[0] object-contain"
        />
        <h1
          className={`sm:text-[400px] text-[200px] leading-tight text-center text-transparent bg-clip-text bg-gradient-to-b z-10 from-black to-70% ${thunder.className}`}
        >
          {number}
        </h1>
        <div className="flex flex-col text-white z-10 text-center items-center md:-mt-48 -mt-24">
          <h2 className="font-bold underline-offset-4 text-xl">{subtitle1}</h2>
          <p className="max-w-lg mb-8 mt-2">{desc1}</p>
          <a
            style={{
              background:
                "linear-gradient(180deg, rgba(0, 240, 255, 0.30) 0%, rgba(126, 255, 146, 0.06) 100%)",
            }}
            href="#contact"
            className="md:text-4xl before:bg-white before:absolute relative before:bottom-0 before:left-0 before:w-full before:h-full before:rounded-full before:scale-x-0 hover:before:scale-x-100 before:duration-300 before:transition-transform before:origin-right hover:before:origin-left before:z-[-1] z-10 hover:text-sky-800 overflow-hidden duration-300 flex justify-center font-semibold items-center rounded-full px-6 py-3 text-white"
          >
            LAUNCH
          </a>
        </div>
      </div>
      <div
        id="con"
        className="bg-black relative md:px-14 px-6 w-full overflow-hidden text-white flex flex-col justify-between"
      >
        <Image
          className="absolute top-0 left-0 h-full object-contain"
          src={blueprint}
        />
        <div className="z-10 flex flex-col justify-between items-end py-24 text-right">
          <div className="lg:text-8xl md:text-6xl text-4xl max-w-xl flex flex-col items-start leading-tighter before:z-10 z-10 text-white font-bold relative">
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
              <h3 className="text-[#36A0B4] uppercase">
                We are{" "}
                <span className="normal-case font-bold text-white">
                  <br />
                  {subtitle2}
                </span>
              </h3>
              <p className="">{desc3}</p>
            </div>
            <div className="max-w-sm z-10 flex flex-col items-end text-right sm:px-4">
              <div className="bg-black absolute top-0 sm:p-2 -mt-2.5 z-10">
                <div className="bg-white w-2.5 h-[2px] z-10 sm:flex hidden"></div>
                <div className="bg-white w-2.5 h-[2px] rotate-90 -translate-y-full sm:flex hidden"></div>
              </div>
              <Image src={design} className="h-14 w-14 object-contain mb-1" />
              <h3 className="text-[#36A0B4] uppercase">
                We are{" "}
                <span className="normal-case font-bold text-white">
                  <br />
                  {subtitle3}
                </span>
              </h3>
              <p className="">{desc4}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceAlt;
