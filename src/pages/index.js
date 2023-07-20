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

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Home() {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <Head>
        <title>
          Launch Levels | The #1 Website Development and Social Media Agency in
          Tracy, CA
        </title>
      </Head>
      <main className={`${inter.className} overflow-x-hidden relative`}>
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
        <Services />
        <Process />
        <Work />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
