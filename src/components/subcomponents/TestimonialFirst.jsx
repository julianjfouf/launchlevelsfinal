import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import star from "../../../public/icons/star.png";
import danobg from "../../../public/images/maliktint.png";

const TestimonialFirst = ({ logo, image, goRight, link, goLeft }) => {
  return (
    <div
      className={`flex flex-col w-full md:items-start items-center overflow-hidden px-6 md:px-14 pt-6 bg-black text-white relative`}
    >
      <Image
        src={danobg}
        className="absolute left-0 top-0 w-full object-contain opacity-30 blur"
      />
      <Image className="h-full object-contain z-10" src={logo} />
      <div className="flex xl:flex-row flex-col xl:my-24 my-6 items-start">
        <Image
          className="object-contain z-10 xl:max-w-[33vw] md:h-full h-[33vh]"
          src={image}
        />
        <div className="flex flex-col items-center relative w-full md:items-start xl:pl-24 xl:mt-0 mt-12 z-10">
          <div className="bg-green-500 h-[2px] w-1/2 left-0 top-0 z-10"></div>
          <h1 className="lg:text-8xl md:text-6xl text-4xl font-bold pt-6 z-10">
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
          <p className="pb-6 max-w-xl md:text-xl md:text-left text-center z-10">
            "These guys have absolutely transformed my entire brand from zero to
            hero. I don't know what I would have done without their generous
            amount of help and guidance. I definitely recommend these guys to
            anyone interested in expanding their brand."
          </p>
          <a
            href="https://danosdetailing.com/"
            target="_blank"
            className="text-xl flex justify-center font-semibold items-center bg-white rounded-lg px-12 py-4 text-black"
          >
            See Website
          </a>
          <div className="hidden pt-6 gap-6">
            <p>Instagram</p>
            <p>Facebook</p>
            <p>Google</p>
          </div>
          <div className="flex justify-center md:justify-start items-start mt-6 select-none h-full w-full gap-6">
            <div
              onClick={() => goLeft()}
              className="p-6 cursor-pointer bg-green-500 flex justify-center items-center"
            >
              {"<-"}
            </div>
            <div
              onClick={() => goRight()}
              className="p-6 cursor-pointer flex justify-center items-center bg-green-500"
            >
              {"->"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialFirst;
