import Image from "next/image";
import React from "react";

const CardLeft = ({ number, title, description, image }) => {
  return (
    <div className="relative flex md:flex-row flex-col-reverse w-full">
      <div
        className={`md:w-1/2 flex flex-col items-center md:pr-12 ${
          number == "01" ? `pb-12 md:py-0 pt-6` : `md:py-12 pb-12 pt-6`
        }`}
      >
        <div className="flex flex-col md:items-end items-center md:text-right text-center w-full relative">
          <div className="h-3 w-3 bg-black md:flex hidden rounded-full absolute top-1/2 -translate-y-1/2 right-[-54px]"></div>
          <div className=" flex flex-col md:items-end items-center bg-white md:bg-transparent md:py-0 py-6">
            <h3 className="font-bold xl:text-8xl md:text-5xl text-4xl">
              {title}
            </h3>
            <p className="max-w-lg md:text-right text-center mt-6 md:text-xl">
              {description}
            </p>
          </div>
        </div>
      </div>
      <div
        className={`md:w-1/2 md:pl-12 flex md:justify-start justify-center z-10 ${
          number == "01" ? `md:pb-12 md:pt-0 pt-12` : `md:py-12 pt-12`
        }`}
      >
        <Image src={image} className="h-full object-contain" />
      </div>
    </div>
  );
};

export default CardLeft;
