import Image from "next/image";
import React, { useState } from "react";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";

const Projects = ({ images }) => {
  const [progress, setProgress] = useState(0);
  let { scrollYProgress } = useScroll();
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setProgress(latest);
  });
  return (
    <motion.div
      style={{ overflowX: "hidden" }}
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.25 }}
      className={`flex items-center gap-12 lg:mx-[-96px] mx-[-48px] mt-12 mb-12`}
    >
      <div
        style={{
          transform: `translateX(-${scrollYProgress.current * 100}%)`,
        }}
        className={`flex items-center gap-12`}
      >
        {images.map((image) => (
          <Image
            className="lg:h-96 md:h-72 sm:h-60 h-48 object-contain"
            src={image}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
