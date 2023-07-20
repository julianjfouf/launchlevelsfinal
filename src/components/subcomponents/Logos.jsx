import Image from "next/image";
import React, { useState } from "react";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";

const Logos = ({ logos }) => {
  const [progress, setProgress] = useState(0);
  let { scrollYProgress } = useScroll();
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setProgress(latest);
  });
  return (
    <div className="bg-[#000000] overflow-x-hidden">
      <div
        style={{
          transform: `translateX(${scrollYProgress.current * 100}%)`,
        }}
        className="w-full py-10 flex gap-24 overflow-hidden items-center"
      >
        {logos.map((logo) => (
          <Image
            className="h-12 object-contain grayscale invert brightness-50"
            src={logo}
          />
        ))}
      </div>
    </div>
  );
};

export default Logos;
