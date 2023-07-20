import Image from "next/image";
import React from "react";
import dummy from "../../public/images/ringsasset.png";
import image1 from "../../public/images/onboarding.png";
import image2 from "../../public/images/designpicture.png";
import image3 from "../../public/images/coding.png";
import image4 from "../../public/images/googlesearch.png";
import CardLeft from "./subcomponents/CardLeft";
import CardRight from "./subcomponents/CardRight";

const Process = () => {
  return (
    <div className="flex flex-col items-center justify-center my-24 px-6 md:px-14">
      <h1 className="lg:text-9xl md:text-7xl text-5xl font-bold uppercase text-center">THE PROCESS</h1>
      <p className="md:text-xl mt-6 mb-12">Where form meets function</p>
      <div className="flex flex-col relative">
        <div className="bg-black w-[2px] h-full absolute top-0 left-1/2 -translate-x-1/2"></div>
        <CardLeft
          title="ANALYZE & STRATEGIZE"
          description="Beginning with online calls to discuss your needs and understand how we can best assist you to reach the results that you want."
          image={image1}
          number="01"
        />
        <CardRight
          title="MOCKUP & PROTOTYPE"
          description="Our team of designers take your ideas to fruition by creating concepts of a website or media campaign that you like best and also are best for catching the attention of potential customers."
          image={image2}
          number="02"
        />
        <CardLeft
          title="IMPLEMENT & DEVELOP"
          description="No one likes a templated website design, so our lead engineer will custom code the design you like best from the previous stage with precision."
          image={image3}
          number="03"
        />
        <CardRight
          title="OPTIMIZE & REFINE"
          description="Understanding what makes your website good is our priority so we optimize your website through on page and organic SEO which improves your chances of ranking higher in google search results which increases traffic to your website."
          image={image4}
          number="04"
        />
      </div>
    </div>
  );
};

export default Process;
