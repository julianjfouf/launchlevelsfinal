import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import star from "../../../public/icons/star.png";

const TestimonialThree = ({ logo, image, link, goLeft, goRight }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`flex flex-col w-full px-14 pt-6 bg-black text-white`}
    >
      <Image className="h-full object-contain" src={logo} />
      <div className="flex my-24">
        <Image
          className="object-contain w-1/3 border-8 border-green-500"
          src={image}
        />
        <div className="flex flex-col relative w-full items-start pl-24">
          <div className="bg-green-500 h-[2px] w-1/2 left-0 top-0"></div>
          <h1 className="text-8xl font-bold pt-6">Greg</h1>
          <p className="text-4xl text-neutral-400">Real Estate Portfolio</p>
          <div className="flex items-center gap-1 my-6">
            <Image src={star} />
            <Image src={star} />
            <Image src={star} />
            <Image src={star} />
            <Image src={star} />
          </div>
          <p className="pb-6 max-w-xl text-xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
            deleniti, eveniet hic nihil nemo ipsum aspernatur alias, natus,
            perferendis nesciunt perspiciatis repellendus commodi debitis.
            Dolorum sequi eius esse iusto incidunt?
          </p>
          <a
            href={link}
            className="text-xl flex justify-center font-semibold items-center bg-white rounded-lg px-12 py-4 text-black"
          >
            See Website
          </a>
          <div className="flex pt-6 gap-6">
            <p>Instagram</p>
            <p>Facebook</p>
            <p>Google</p>
          </div>
          <div className="flex justify-end h-full w-full items-end gap-6">
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
    </motion.div>
  );
};

export default TestimonialThree;
