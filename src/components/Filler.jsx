import React from "react";
import Logos from "./subcomponents/Logos";
import Projects from "./subcomponents/Projects";
import project1 from "../../public/projects/display1.png";
import project2 from "../../public/projects/display2.png";
import project3 from "../../public/projects/display3.png";
import project4 from "../../public/projects/display4.png";
import project5 from "../../public/projects/display5.png";
import logo1 from "../../public/logos/logo1.png";
import logo2 from "../../public/logos/logo2.png";
import logo3 from "../../public/logos/logo3.png";
import logo4 from "../../public/logos/logo4.png";
import logo5 from "../../public/logos/logo5.png";
import logo6 from "../../public/logos/logo6.png";

const Filler = () => {
  return (
    <div className="md:flex flex-col hidden">
      <Projects
        images={[project2, project3, project1, project5, project4, project2]}
      />
      <Logos logos={[logo1, logo2, logo3, logo4, logo5, logo6]} />
    </div>
  );
};

export default Filler;
