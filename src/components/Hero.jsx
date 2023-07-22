import React from "react";
import Navbar from "./Navbar";
import rings from "../../public/images/ringsasset.png";
import bg from "../../public/images/grainygradient.png";
import Image from "next/image";
import Projects from "./subcomponents/Projects";
import Logos from "./subcomponents/Logos";
import localFont from "next/font/local";

const thunder = localFont({
  src: "../../public/fonts/Thunder-ExtraBoldLC.woff",
});

const Hero = ({ setMenu, menu }) => {
  return (
    <div className="bg-cover overflow-hidden antialiased bg-center bg-no-repeat relative text-white text-center min-h-screen w-full flex justify-center items-center flex-col">
      <Image
        src={bg}
        className="lg:w-full h-full spin object-cover aspect-auto top-1/2 -translate-y-1/2 absolute z-[-2] left-0"
      />
      <div className="bg-black z-[-3] absolute left-0 right-0 top-0 bottom-0"></div>
      <Navbar setMenu={setMenu} menu={menu} />
      <div className="relative font-bold">
        <h1
          className={`xl:text-[240px] md:text-[200px] text-center xl:leading-[180px] md:leading-[160px] text-9xl leading-[100px] ${thunder.className}`}
        >
          <span
            style={{
              background:
                "linear-gradient(180deg, rgba(255, 255, 255, 0.26) 0%, #FFF 35.94%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            LAUNCH
          </span>{" "}
          <br />{" "}
          <span
            style={{
              background:
                "linear-gradient(180deg, #FFF 57.29%, rgba(255, 255, 255, 0.12) 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            LEVELS
          </span>
        </h1>
        <Image
          className="absolute bottom-0 right-0 translate-y-3/4 z-[-1]"
          src={rings}
        />
      </div>
      <p className="max-w-lg my-12 md:text-4xl px-6">
        <i>launch</i> your business to the next <i>level</i>
      </p>
      <a
        href="#contact"
        className="md:text-6xl text-xl before:bg-white before:absolute relative before:bottom-0 before:left-0 before:w-full before:h-full before:rounded-full before:scale-x-0 hover:before:scale-x-100 before:duration-300 before:transition-transform before:origin-right hover:before:origin-left before:z-[-1] z-10 hover:text-black overflow-hidden duration-300 bg-black/60 rounded-full px-6 py-3 font-semibold"
      >
        START
      </a>
    </div>
  );
};

export default Hero;
