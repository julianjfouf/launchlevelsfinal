import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import space from "../../public/images/spacestation.png";
import emailwhite from "../../public/icons/emailwhite.png";
import fbwhite from "../../public/icons/fbwhite.png";
import igwhite from "../../public/icons/igwhite.png";
import phonewhite from "../../public/icons/phonewhite.png";
import twitterwhite from "../../public/icons/twitterwhite.png";
import tiktokwhite from "../../public/icons/tiktokwhite.png";
import localFont from "next/font/local";

const thunder = localFont({
  src: "../../public/fonts/Thunder-BoldLC.woff",
});

const Contact = ({
  one,
  setOne,
  two,
  setTwo,
  three,
  setThree,
  four,
  setFour,
}) => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSelectOne = (e) => {};

  const handleSelectTwo = (e) => {};

  const handleSelectThree = (e) => {};

  const handleSelectFour = (e) => {};

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .send(
        "service_ym3lo8g",
        "template_56xoylw",
        {
          from_name: form.name,
          to_name: "Fernando",
          from_email: form.email,
          to_email: "contact@jssmastery.pro",
          message: form.message,
          one: one,
          two: two,
          three: three,
          four: four,
        },
        "aQ6vYj0jDyU7dLrx9"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you for the message! We will get back to you soon.");
          setForm({
            name: "",
            email: "",
            message: "",
          });
          setOne(false);
          setTwo(false);
          setThree(false);
          setFour(false);
        },
        (error) => {
          setLoading(false);
          console.log(error);

          alert("Message did not send. Something went wrong.");
        }
      );
  };
  return (
    <div
      id="contact"
      className="py-24 px-6 md:px-14 bg-black text-white relative z-10"
    >
      <Image
        src={space}
        className="absolute right-0 top-0 h-full z-[-1] object-contain"
      />
      <h1
        className={`lg:text-[175px] text-[90px] font-bold uppercase text-center ${thunder.className} text-transparent bg-clip-text bg-gradient-to-b from-white to-black`}
      >
        Contact
      </h1>
      <p className="md:text-3xl text-center font-semibold text-white mb-16 -mt-4">Get in touch with us.</p>
      <div className="flex xl:flex-row flex-col">
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col items-start xl:w-1/2 xl:pr-12"
        >
          <h3 className="xl:text-3xl text-xl">What can we do for you?</h3>
          <div className="flex mt-6 gap-3 md:text-xl flex-wrap">
            <div
              onClick={() => setOne(!one)}
              className={`px-4 py-2 border-[2px] cursor-pointer select-none duration-300 border-white rounded-full ${
                one ? `bg-white text-black` : null
              }`}
            >
              Website
            </div>
            <div
              onClick={() => setTwo(!two)}
              className={`px-4 py-2 border-[2px] cursor-pointer select-none duration-300 border-white rounded-full ${
                two ? `bg-white text-black` : null
              }`}
            >
              Content Creation
            </div>
            <div
              onClick={() => setThree(!three)}
              className={`px-4 py-2 border-[2px] cursor-pointer select-none duration-300 border-white rounded-full ${
                three ? `bg-white text-black` : null
              }`}
            >
              Social Media
            </div>
            <div
              onClick={() => setFour(!four)}
              className={`px-4 py-2 border-[2px] cursor-pointer select-none duration-300 border-white rounded-full ${
                four ? `bg-white text-black` : null
              }`}
            >
              Other
            </div>
          </div>
          <input
            placeholder="Name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            className="p-10 mt-12 mb-6 z-20 md:text-xl placeholder:text-xl text-black ring-0 outline-none placeholder:text-black w-full rounded-[60px] bg-white"
          ></input>
          <input
            placeholder="Email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            className="p-10 z-20 rounded-[60px] md:text-xl placeholder:text-xl text-black ring-0 outline-none placeholder:text-black w-full bg-white"
          ></input>
          <textarea
            placeholder="Message"
            rows={5}
            name="message"
            type="text"
            value={form.message}
            onChange={handleChange}
            required
            className="p-10 resize-none my-6 z-20 md:text-xl placeholder:text-xl text-black ring-0 outline-none placeholder:text-black w-full rounded-[60px] bg-white"
          ></textarea>
          <button
            type="submit"
            className="z-20 uppercase cursor-pointer duration-300 before:z-[-1] before:absolute hover:text-black relative before:w-full before:h-full before:bg-white before:rounded-full before:scale-x-0 before:origin-right hover:before:origin-left before:transition-transform hover:before:scale-x-100 overflow-hidden before:duration-300 border-[2px] border-white text-white xl:px-48 md:px-24 sm:px-12 px-6 md:py-10 py-5 w-full rounded-full flex justify-center items-center xl:text-5xl md:text-3xl text-xl"
          >
            Send
          </button>
        </form>
        <div className="xl:w-1/2 hidden lg:flex justify-center items-center font-bold xl:text-3xl md:text-xl">
          <div className="xl:pl-12 hidden lg:flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <Image src={emailwhite} className="xl:h-16 h-12 w-12 xl:w-16 object-contain" />
              <p>launchlevels@gmail.com</p>
            </div>
            <div className="flex items-center gap-3">
              <Image src={phonewhite} className="xl:h-16 h-12 w-12 xl:w-16 object-contain" />
              <p>(209) 278-9098</p>
            </div>
            <div>
              <h1 className="mb-3">Connect with us</h1>
              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/launchlevels/"
                  target="_blank"
                >
                  <Image className="xl:h-8 h-6 xl:w-8 w-6" src={igwhite} />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100094516539154"
                  target="_blank"
                >
                  <Image className="h-6 xl:w-8 xl:h-8 w-6" src={fbwhite} />
                </a>
                {/* <Image className="h-6 w-6" src={twitterwhite} />
              <Image className="h-6 w-6" src={tiktokwhite} /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
