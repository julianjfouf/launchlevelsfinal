import React, { useState } from "react";
import project1 from "../../public/logos/ddlogo.png";
import dano from "../../public/images/danospicture.png";
import adam from "../../public/images/adambaker.jpg";
import grain from "../../public/images/grainyness.png";
import TestimonialFirst from "./subcomponents/TestimonialFirst";
import TestimonialTwo from "./subcomponents/TestimonialTwo";
import TestimonialThree from "./subcomponents/TestimonialThree";
import Image from "next/image";
import { AnimatePresence } from "framer-motion";
import localFont from "next/font/local";

const thunder = localFont({
  src: "../../public/fonts/Thunder-BoldLC.woff",
});

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  function goRight() {
    setIndex(index + 1);
    console.log(Math.abs(index % 3));
  }

  function goLeft() {
    setIndex(index - 1);
    console.log(Math.abs(index % 3));
  }
  return (
    <div
      id="testimonials"
      className="flex flex-col py-24 relative px-6 md:px-14"
    >
      <h1
        className={`lg:text-[175px] text-transparent bg-clip-text text-center bg-gradient-to-b from-black from-50% to-white ${thunder.className} md:text-7xl text-5xl font-bold uppercase`}
      >
        TESTIMONIALS
      </h1>
      <p className="md:text-xl mt-6 mb-12 text-center">
        What our clients say about us.
      </p>
      <div className={`flex w-full duration-500`}>
        <div
          className={`${Math.abs(index % 2) === 1 ? "flex w-full" : "hidden"}`}
        >
          <TestimonialFirst
            goRight={goRight}
            goLeft={goLeft}
            logo={project1}
            image={dano}
            setIndex={setIndex}
          />
        </div>
        <div
          className={`${Math.abs(index % 2) === 0 ? "flex w-full" : "hidden"}`}
        >
          <TestimonialTwo
            goRight={goRight}
            goLeft={goLeft}
            logo={project1}
            image={adam}
            setIndex={setIndex}
          />
        </div>
        {/* <div className={`${index % 3 === 2 ? "flex w-full" : "hidden"}`}>
          <TestimonialThree
            goRight={goRight}
            goLeft={goLeft}
            logo={project1}
            image={dano}
            setIndex={setIndex}
          />
        </div> */}
      </div>
    </div>
  );
};

export default Testimonials;
