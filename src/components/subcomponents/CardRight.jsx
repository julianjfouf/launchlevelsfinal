import Image from "next/image";
import React from "react";

const CardRight = ({ title, number, description, image }) => {
  return (
    <div className="relative flex md:flex-row-reverse flex-col-reverse w-full">
      <div
        className={`md:w-1/2 flex flex-col items-center md:pl-12 ${
          number == "04" ? `pb-12 md:py-0 pt-6` : `md:py-12 pb-12 pt-6`
        }`}
      >
        <div className="flex flex-col md:items-start items-center text-left w-full relative">
          <div className="h-3 w-3 bg-black rounded-full absolute top-1/2 -translate-y-1/2 left-[-54px]"></div>
          <div className=" md:text-left text-center md:bg-transparent bg-white md:py-0 py-6">
            <h3 className="xl:text-8xl md:text-5xl text-3xl font-bold">
              {title}
            </h3>
            <p className="max-w-lg mt-6 md:text-xl">{description}</p>
          </div>
        </div>
      </div>
      <div
        className={`md:w-1/2 flex md:justify-end justify-center z-10 md:pr-12 ${
          number == "04" ? `md:pb-12 md:pt-0 pt-12` : `md:py-12 pt-12`
        }`}
      >
        <Image src={image} className="h-full object-contain" />
      </div>
    </div>
  );
};

export default CardRight;
