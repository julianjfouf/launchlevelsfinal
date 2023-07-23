import React from "react";
import project1 from "../../public/projects/display1.png";
import project3 from "../../public/projects/display3.png";
import project4 from "../../public/projects/display4.png";
import project5 from "../../public/projects/display5.png";
import localFont from "next/font/local";

const thunder = localFont({
  src: "../../public/fonts/Thunder-BoldLC.woff",
});
const Work = () => {
  return (
    <div id="work" className="flex flex-col items-center md:px-14 px-6 pt-12 pb-24">
      <h1
        className={`lg:text-[175px] text-transparent bg-clip-text bg-gradient-to-b from-black from-50% to-white ${thunder.className} text-[90px] font-bold uppercase`}
      >
        WORK
      </h1>
      <p className="md:text-3xl text-center font-semibold mb-16 -mt-4">
        Our special selection of work.
      </p>
      <div className="flex flex-wrap w-full">
        <div className="xl:w-1/2 w-full xl:pr-2.5 pb-2.5">
          <div className="bg-[url(/projects/display1.png)] sm:bg-cover bg-contain bg-top bg-no-repeat md:h-[100vh] sm:h-[75vh] h-[50vh] w-full aspect-auto object-contain" />
        </div>
        <div className="xl:w-1/2 w-full xl:pl-2.5 pb-2.5">
          <div className="bg-[url(/projects/display5.png)] sm:bg-cover bg-contain bg-top bg-no-repeat md:h-[100vh] sm:h-[75vh] h-[50vh] w-full aspect-auto object-contain" />
        </div>
        <div className="xl:w-1/2 w-full xl:pr-2.5 pt-2.5">
          <div className="bg-[url(/projects/display4.png)] sm:bg-cover bg-contain bg-top bg-no-repeat md:h-[100vh] sm:h-[75vh] h-[50vh] w-full aspect-auto object-contain" />
        </div>
        <div className="xl:w-1/2 w-full xl:pl-2.5 pt-2.5">
          <div className="bg-[url(/projects/display3.png)] sm:bg-cover bg-contain bg-top bg-no-repeat md:h-[100vh] sm:h-[75vh] h-[50vh] w-full aspect-auto object-contain" />
        </div>
      </div>
    </div>
  );
};

export default Work;
