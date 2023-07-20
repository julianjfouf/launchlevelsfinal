import React from "react";
import Navbar from "./Navbar";
import rings from "../../public/images/ringsasset.png";
import bg from "../../public/images/grainygradient.png";
import Image from "next/image";
import Projects from "./subcomponents/Projects";
import Logos from "./subcomponents/Logos";

const Hero = ({ setMenu, menu }) => {
  return (
    <div className="bg-cover overflow-hidden antialiased bg-center bg-no-repeat relative text-white text-center min-h-screen w-full flex justify-center items-center flex-col">
      <Image
        src={bg}
        className="lg:w-full h-full spin object-cover opacity-75 saturate-200 brightness-75 aspect-auto top-1/2 -translate-y-1/2 absolute z-[-2] left-0"
      />
      <div className="bg-black z-[-3] absolute left-0 right-0 top-0 bottom-0"></div>
      <Navbar setMenu={setMenu} menu={menu} />
      <div className="relative font-bold">
        <h1 className="xl:text-[180px] md:text-[140px] text-center xl:leading-[140px] md:leading-[120px] text-6xl tracking-tighter">
          LAUNCH <br /> LEVELS
        </h1>
        <Image
          className="absolute bottom-0 right-0 translate-y-3/4 z-[-1]"
          src={rings}
        />
      </div>
      <p className="max-w-lg my-12 md:text-xl px-6">
        <b>Launch</b> your business to the next <b>Level</b>.
      </p>
      <a
        href="#contact"
        className="md:text-4xl text-xl bg-black shadow-[0px_32px_32px_0px_rgba(0,0,0,0.50)] rounded-lg px-12 py-4 font-semibold"
      >
        START
      </a>
    </div>
  );
};

export default Hero;
