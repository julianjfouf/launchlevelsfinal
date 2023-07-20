import Image from "next/image";
import React from "react";
import gradient from "../../public/images/whitegrainygradient.png";
import bluegradient from "../../public/images/bluegradient.png";
import design from "../../public/icons/design.png";
import development from "../../public/icons/development.png";
import Service from "./subcomponents/Service";
import ServiceAlt from "./subcomponents/ServiceAlt";
import help from "../../public/icons/help.png";
import team from "../../public/icons/team.png";
import strategy from "../../public/icons/strategy.png";
import risk from "../../public/icons/risk.png";

const Services = () => {
  return (
    <div id="services" className="relative flex flex-col items-center justify-center py-24">
      <div className="absolute w-full h-full flex flex-col top-0 md:top-[-10%]">
        <Image
          className="z-[-3] rotate-90 min-h-[100vw] blur"
          alt="gradient"
          src={gradient}
        />
        <Image
          className="z-[-3] min-w-[100vw] blur"
          alt="gradient"
          src={bluegradient}
        />
      </div>
      <h1 className="lg:text-9xl md:text-7xl text-5xl font-bold uppercase">Services</h1>
      <p className="md:text-xl mt-6 mb-12">Our special selection of services.</p>
      <Service
        number="01"
        desc1="We help clients strengthen their brand by designing websites through
        unique solutions. Whether you want to transform your brand or simply
        increase its size, we will help you realize your vision."
        desc2="Everyone is tired of seeing boring template websites. With our
        graphic design help, we can help your company (small or large) to
        create unique engaging work to increase brand awareness, improve
        lead conversion, and organically optimize your system."
        desc3="We code all of our websites to ensure that your website is made
        with the most up-to-date software and best industry practices."
        desc4="We design your website using the best graphic design procedures
        so that your website is both modern and perfect for you and your
        brand."
        icon1={design}
        icon2={development}
        title="WEB DESIGN & DEVELOPMENT"
        subtitle1="What we do"
        subtitle2="DEVELOPERS"
        subtitle3="DESIGNERS"
      />
      <ServiceAlt
        number="02"
        desc1="We help your brand grow its online social media following by creating purposeful content that intentionally helps you get your message out. We do everything between video editing, graphic design, and short form content that puts your business in the best light."
        desc2="We offer you performance based short form content creation to successfully reach and engage with larger audiences. Promising top quality in-house editing, we consistently implement  creative narratives about your business increasing product demand and drive engagement."
        desc3="Through our various strategies, we are able to convert your obstacles into opportunities for digital growth."
        desc4="We will work with you every step of the way to make sure you are on the same page as us on what your brand needs most to unlock the next level of social media influence and customer engagement."
        title="CONTENT CREATION"
        subtitle1="What we do"
        subtitle2="STRATEGISTS"
        subtitle3="COLLABORATORS"
        design={team}
        development={strategy}
      />
      <Service
        number="03"
        desc1="We help you discover your brand's identity and help you get your name out there with proven Facebook lead conversion methods and social media management."
        desc2="Social media has allowed us to become more connected and networked. Our social media management delivers value based content that increases followers & brand growth to ultimately strengthen the foundation of your business."
        desc3="We work with some of the best leaders and local businesses in our community which has enabled us to develop our ability to understand you and your needs."
        desc4="We do not receive payment until you are fully satisfied with our services."
        title="SOCIAL MEDIA"
        subtitle1="What we do"
        subtitle2="RELIABLE"
        subtitle3="RISK-FREE"
        icon1={help}
        icon2={risk}
      />
    </div>
  );
};

export default Services;

{
  /* <div className="flex w-full h-full">
        <div className="flex flex-col relative justify-around border-black px-14 overflow-hidden py-12 bg-green-500">
          <Image
            src={grain}
            className="absolute top-0 left-0 w-full object-contain opacity-10"
          />
          <h1 className="text-[240px] leading-[180px] font-bold text-white">
            01
          </h1>
          <div className="flex flex-col text-black z-10">
            <h2 className="font-semibold underline-offset-4 text-lg">
              Our Objective
            </h2>
            <p className="max-w-lg mb-2 font-medium">
              We help clients strengthen their brand by designing websites
              through unique solutions. Whether you want to transform your brand
              or simply increase its size, we will help you realize your vision.
            </p>
            <a className="text-xl flex justify-center font-semibold items-center bg-black shadow-[0px_32px_32px_0px_rgba(0,0,0,0.50)] rounded-lg px-12 py-4 text-white">
              LAUNCH
            </a>
          </div>
        </div>
        <div className="bg-black relative w-full overflow-hidden text-white flex flex-col justify-between">
          <Image
            className="absolute top-0 left-0 w-full object-contain opacity-30"
            src={blueprint}
          />
          <div className="z-10 flex flex-col justify-between items-start py-24 px-14">
            <h1 className="text-8xl leading-tighter before:z-10 z-10 text-green-500 font-bold relative">
              WEB DESIGN
            </h1>
            <p className="max-w-lg mt-12">
              Everyone is tired of seeing boring template websites. With our
              graphic design help, we can help your company (small or large) to
              create unique engaging work to increase brand awareness, improve
              lead conversion, and organically optimize your system.
            </p>
          </div>
          <div className="z-10 pb-24 px-14 backdrop-blur">
            <div className="w-full h-[2px] bg-white z-10"></div>
            <div className="w-full relative flex items-start justify-around z-10">
              <div className="max-w-sm z-10 flex flex-col items-start">
                <div className="bg-black rounded-full ring-[2px] ring-white p-2 -mt-2.5 z-10">
                  <div className="bg-white w-2.5 h-[2px] z-10"></div>
                  <div className="bg-white w-2.5 h-[2px] rotate-90 -translate-y-full"></div>
                </div>
                <Image src={development} className="w-14 h-14 -ml-1 mt-2" />
                <h3 className="font-bold text-green-500">
                  Development
                </h3>
                <p className="">
                  We code all of our websites to ensure that your website is
                  made with the most up-to-date software and best industry
                  practices.
                </p>
              </div>
              <div className="max-w-sm z-10 flex flex-col items-start">
                <div className="bg-black rounded-full ring-[2px] ring-white p-2 -mt-2.5 z-10">
                  <div className="bg-white w-2.5 h-[2px] z-10"></div>
                  <div className="bg-white w-2.5 h-[2px] rotate-90 -translate-y-full"></div>
                </div>
                <Image src={design} className="w-14 h-14 -ml-2 mt-2" />
                <h3 className="font-bold text-green-500">Design</h3>
                <p className="">
                  We design your website using the best graphic design
                  procedures so that your website is both modern and perfect for
                  you and your brand.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */
}
