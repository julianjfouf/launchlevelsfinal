import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import star from "../../../public/icons/star.png";
import danobg from "../../../public/images/maliktint.png";

const TestimonialFirst = ({ logo, image, goRight, link, goLeft, review }) => {
  return (
    <div
      className={`flex flex-col select-none w-full bg-[url('/images/maliktint.png')] bg-cover bg-center bg-no-repeat md:items-center items-center bg-black text-white relative`}
    >
      <div className="absolute bg-black/70 left-0 top-0 w-full h-full"></div>
      <div className="flex xl:flex-row flex-col xl:py-24 py-6 px-24 justify-center items-center backdrop-blur w-full">
        <div className="max-w-[25vw] w-full max-h-[75vh] flex justify-center overflow-hidden z-10">
          <Image className="object-contain z-10 w-full md:h-full" src={image} />
        </div>
        <div className="flex flex-col items-center relative h-full md:items-center xl:pl-24 xl:mt-0 mt-12 z-10">
          <div className="bg-green-500 h-[2px] w-1/2 left-0 top-0 z-10"></div>
          <h1 className="lg:text-8xl xl:text-6xl text-4xl font-bold pt-6 z-10">
            Malik's Tints
          </h1>
          <p className="lg:text-4xl text-neutral-400 z-10">
            Mobile Car Tinting
          </p>
          <div className="flex items-center gap-1 my-6 z-10">
            <Image className="h-5 w-5 object-contain" src={star} />
            <Image className="h-5 w-5 object-contain" src={star} />
            <Image className="h-5 w-5 object-contain" src={star} />
            <Image className="h-5 w-5 object-contain" src={star} />
            <Image className="h-5 w-5 object-contain" src={star} />
          </div>
          <p className="pb-12 max-w-2xl md:text-xl text-center z-10">
            "{review}"
          </p>
          <a
            href="https://danosdetailing.com/"
            target="_blank"
            className="text-xl flex justify-center font-semibold items-center outline outline-green-500 rounded-full px-6 py-3 text-green-500"
          >
            See Website
          </a>
          <div className="hidden pt-6 gap-6">
            <p>Instagram</p>
            <p>Facebook</p>
            <p>Google</p>
          </div>
        </div>
      </div>
      <div
        onClick={() => goLeft()}
        className="absolute group left-0 top-1/2 text-xl -translate-y-1/2 z-20 h-20 w-20 rounded-full cursor-pointer flex justify-center items-center"
      >
        <div className="">
          <div className="bg-white group-hover:shadow-[0px_0px_12px_4px_rgba(255,255,255,0.25)] duration-300 -rotate-45 w-10 h-[2px] -translate-y-[650%]"></div>
          <div className="bg-white group-hover:shadow-[0px_0px_12px_4px_rgba(255,255,255,0.25)] duration-300 rotate-45 w-10 h-[2px] translate-y-[650%]"></div>
        </div>
      </div>
      <div
        onClick={() => goRight()}
        className="absolute right-0 group top-1/2 text-xl -translate-y-1/2 z-20 h-20 w-20 rounded-full cursor-pointer flex justify-center items-center"
      >
        <div className="">
          <div className="bg-white group-hover:shadow-[0px_0px_12px_4px_rgba(255,255,255,0.25)] duration-300 rotate-45 w-10 h-[2px] -translate-y-[650%]"></div>
          <div className="bg-white group-hover:shadow-[0px_0px_12px_4px_rgba(255,255,255,0.25)] duration-300 -rotate-45 w-10 h-[2px] translate-y-[650%]"></div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4">
        <div className="w-4 h-4 border border-white rounded-full"></div>
        <div className="w-4 h-4 border border-white bg-white rounded-full"></div>
      </div>
    </div>
  );
};

export default TestimonialFirst;
