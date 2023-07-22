import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import star from "../../../public/assets/greenstar.png";
import quote from "../../../public/assets/greenquote.png";
import one from "../../../public/assets/greeninstagram.png";
import two from "../../../public/assets/greenfacebook.png";
import three from "../../../public/assets/greengoogle.png";

const TestimonialTwo = ({ logo, image, goLeft, goRight, link }) => {
  return (
    <div
      className={`select-none bg-[url('/images/danobg.png')] flex bg-cover xl:flex-row flex-col bg-center bg-no-repeat relative`}
    >
      <div className="absolute bg-gradient-to-b from-black/50 to-black left-0 top-0 w-full h-full" />
      <div className="flex flex-col items-center z-10 text-white xl:p-12 sm:pt-12 sm:px-12 pt-8 pb-6 px-4 text-center">
        <div className="xl:max-w-sm xl:max-h-96 w-[240px] h-[240px] rounded-full overflow-hidden flex justify-center items-center">
          <Image src={image} className="w-full object-contain" />
        </div>
        <h2 className="font-bold xl:text-3xl text-xl mt-2">
          Fernando Rodriguez
        </h2>
        <p className="text-[#A3B087] xl:text-xl">Business Owner</p>
        <div className="flex gap-1 mt-2">
          <Image src={star} className="h-6 w-6 object-contain" />
          <Image src={star} className="h-6 w-6 object-contain" />
          <Image src={star} className="h-6 w-6 object-contain" />
          <Image src={star} className="h-6 w-6 object-contain" />
          <Image src={star} className="h-6 w-6 object-contain" />
        </div>
      </div>
      <div className="z-10 text-white sm:p-12 pb-8 px-4 flex flex-col justify-between">
        <div className="flex flex-col md:items-start items-center md:text-left text-center h-full">
          <Image className="sm:flex hidden" src={quote} />
          <div className="flex h-full sm:items-center items-start">
            <p className="italic max-w-xl text-2xl sm:my-12 mb-6 font-semibold">
              Highly recommend Launch Levels! I worked with them months back to
              help create my website and generate new leads. I was finally ready
              to get serious. They are the real deal. Impeccable service - Thank
              you!
            </p>
          </div>
        </div>
        <div className="flex md:flex-row flex-col items-center md:justify-between">
          <div className="flex flex-col md:items-start items-center md:mr-12">
            <h1 className="xl:text-6xl md:text-3xl text-xl font-bold">
              Dano's Detailing
            </h1>
            <div className="flex items-end text-xl mt-2">
              <p className="text-[#A3B087] sm:flex hidden pr-4 xl:text-xl">
                Mobile Car Detailing
              </p>
              <div className="flex gap-1">
                <Image src={one} className="h-6 w-6 object-contain" />
                <Image src={two} className="h-6 w-6 object-contain" />
                <Image src={three} className="h-6 w-6 object-contain" />
              </div>
            </div>
          </div>
          <a
            target="_blank"
            href="https://danosdetailing.com/"
            className="md:mt-0 mt-6 bg-[#729C55]/60 before:bg-white before:absolute relative before:bottom-0 before:left-0 before:w-full before:h-full before:rounded-full before:scale-x-0 hover:before:scale-x-100 before:duration-300 before:transition-transform before:origin-right hover:before:origin-left before:z-[-1] z-10 hover:text-green-800 overflow-hidden duration-300 text-white text-xl flex justify-center text-center items-center rounded-full px-6 py-3"
          >
            SEE WEBSITE
          </a>
        </div>
      </div>
      <div
        onClick={() => goLeft()}
        className="absolute left-0 hidden group top-1/2 text-xl -translate-y-1/2 z-20 h-20 w-20 rounded-full cursor-pointer justify-center items-center"
      >
        <div className="">
          <div className="bg-white group-hover:shadow-[0px_0px_12px_4px_rgba(255,255,255,0.25)] duration-300 -rotate-45 w-10 h-[2px] -translate-y-[650%]"></div>
          <div className="bg-white group-hover:shadow-[0px_0px_12px_4px_rgba(255,255,255,0.25)] duration-300 rotate-45 w-10 h-[2px] translate-y-[650%]"></div>
        </div>
      </div>
      <div
        onClick={() => goRight()}
        className="absolute group hidden right-0 top-1/2 text-xl -translate-y-1/2 z-20 h-20 w-20 rounded-full cursor-pointer justify-center items-center"
      >
        <div className="">
          <div className="bg-white group-hover:shadow-[0px_0px_12px_4px_rgba(255,255,255,0.25)] duration-300 rotate-45 w-10 h-[2px] -translate-y-[650%]"></div>
          <div className="bg-white group-hover:shadow-[0px_0px_12px_4px_rgba(255,255,255,0.25)] duration-300 -rotate-45 w-10 h-[2px] translate-y-[650%]"></div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden gap-4">
        <div className="w-4 h-4 border border-white bg-white rounded-full"></div>
      </div>
    </div>
  );
};

export default TestimonialTwo;
