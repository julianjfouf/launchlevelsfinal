import React from "react";
import project1 from "../../public/projects/display1.png";
import project3 from "../../public/projects/display3.png";
import project4 from "../../public/projects/display4.png";
import project5 from "../../public/projects/display5.png";

const Work = () => {
  return (
    <div id="work" className="flex flex-col items-center md:px-14 px-6 py-24">
      <h1 className="lg:text-9xl md:text-7xl text-5xl font-bold uppercase">WORK</h1>
      <p className="md:text-xl mt-6 mb-12">Our special selection of work.</p>
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
