import Image from "next/image";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import Head from "next/head";
import Hero from "@/components/Hero";
import Filler from "@/components/Filler";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Work from "@/components/Work";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useState } from "react";

const font = localFont({
  src: [
    { path: "../../public/fonts/HelveticaNowDisplay-Thin.woff", weight: "300" },
    {
      path: "../../public/fonts/HelveticaNowDisplay-Regular.woff",
      weight: "500",
    },
    {
      path: "../../public/fonts/HelveticaNowDisplay-Medium.woff",
      weight: "600",
    },
    {
      path: "../../public/fonts/HelveticaNowDisplay-Black.woff",
      weight: "700",
    },
  ],
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Home() {
  const [menu, setMenu] = useState(false);
  const [one, setOne] = useState(false);
  const [two, setTwo] = useState(false);
  const [three, setThree] = useState(false);
  const [four, setFour] = useState(false);
  return (
    <>
      <Head>
        <title>
          Launch Levels | The #1 Website Development and Social Media Agency in
          Tracy, CA
        </title>
      </Head>
      <main className={`${font.className} overflow-x-hidden relative`}>
        <div
          className={`absolute bg-black left-0 top-0 h-screen w-full z-20 duration-300 ${
            menu ? `translate-y-0` : `-translate-y-full`
          }`}
        >
          <div className="flex flex-col text-xl items-center justify-center gap-12 text-white h-full">
            <a
              onClick={() => setMenu(false)}
              href="#services"
              className="relative before:transition-transform before:absolute before:left-0 before:bottom-[-2px] before:w-full before:h-[1px] before:bg-white before:scale-x-0 hover:before:scale-x-100 before:duration-300 before:origin-right hover:before:origin-left"
            >
              Services
            </a>
            <a
              onClick={() => setMenu(false)}
              href="#process"
              className="relative before:transition-transform before:absolute before:left-0 before:bottom-[-2px] before:w-full before:h-[1px] before:bg-white before:scale-x-0 hover:before:scale-x-100 before:duration-300 before:origin-right hover:before:origin-left"
            >
              Process
            </a>
            <a
              onClick={() => setMenu(false)}
              href="#work"
              className="relative before:transition-transform before:absolute before:left-0 before:bottom-[-2px] before:w-full before:h-[1px] before:bg-white before:scale-x-0 hover:before:scale-x-100 before:duration-300 before:origin-right hover:before:origin-left"
            >
              Work
            </a>
            <a
              onClick={() => setMenu(false)}
              href="#testimonials"
              className="relative before:transition-transform before:absolute before:left-0 before:bottom-[-2px] before:w-full before:h-[1px] before:bg-white before:scale-x-0 hover:before:scale-x-100 before:duration-300 before:origin-right hover:before:origin-left"
            >
              Testimonials
            </a>
            <a
              onClick={() => setMenu(false)}
              href="#contact"
              className="relative before:transition-transform before:absolute before:left-0 before:bottom-[-2px] before:w-full before:h-[1px] before:bg-white before:scale-x-0 hover:before:scale-x-100 before:duration-300 before:origin-right hover:before:origin-left"
            >
              Contact
            </a>
          </div>
        </div>
        <Hero setMenu={setMenu} menu={menu} />
        <Filler />
        <Services
          setOne={setOne}
          setTwo={setTwo}
          setThree={setThree}
          setFour={setFour}
        />
        <Process />
        <Work />
        <Testimonials />
        <Contact
          one={one}
          setOne={setOne}
          two={two}
          setTwo={setTwo}
          three={three}
          setThree={setThree}
          four={four}
          setFour={setFour}
        />
        <Footer />
      </main>
    </>
  );
}
