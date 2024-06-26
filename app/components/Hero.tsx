import { HouseIcon, Link } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import { text } from "stream/consumers";

const parentVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5, // Adjust the stagger timing as needed
    },
  },
};

const childVariant = {
  initial: {
    y: 50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

export default function Hero() {
  return (
    <main className="w-screen h-screen grid place-items-center absolute z-10 ">
      <Nav />
      <Footer />
    </main>
  );
}

const Nav = () => (
  <nav className=" absolute top-0 left-0 w-screen flex justify-between p-8 text-sm">
    <div className="flex gap-x-4">
      <div className="bg-white rounded-full text-black flex items-center h-10 ring-2 ring-white pr-2 gap-2">
        <div className=" bg-black rounded-full text-white h-10 items-center flex px-2">
          ---
        </div>
        Menu
      </div>{" "}
      <div className="bg-black rounded-full text-white flex items-center h-10 ring-1 ring-white pr-4 gap-2">
        <div className=" bg-white rounded-full text-black h-10 items-center flex px-2">
          Ren
        </div>
        This is the outline text
      </div>{" "}
      <div className="bg-black rounded-full text-white flex items-center h-10 ring-1 ring-white pr-4 gap-2">
        <div className=" bg-white rounded-full text-black h-10 items-center flex px-2">
          Tan
        </div>
        Welcome to the future
      </div>
    </div>
    <div className="flex gap-4">
      <div className=" bg-black rounded-full text-white h-10 ring-1 ring-white items-center flex px-2">
        <Link />
      </div>
      <div className="bg-white px-6 text-center justify-center rounded-full text-black flex items-center h-10 ring-1 ring-white gap-2">
        Welcome to the future
      </div>{" "}
    </div>
  </nav>
);

const Footer = () => (
  <motion.div
    variants={parentVariant}
    initial="initial"
    whileInView="animate"
    className="h-1/3 px-8 pb-2 w-screen bottom-0 absolute grid grid-cols-4  gap-2"
  >
    <motion.div
      variants={childVariant}
      className=" col-span-2 flex flex-col gap-6"
    >
      <div className="flex gap-6">
        <div className=" bg-black rounded-full text-white h-10 ring-1 ring-white items-center flex px-4">
          The Cube Conversion
        </div>
        <div className=" bg-black rounded-full text-white h-10 ring-1 ring-white items-center flex px-2">
          <Link />
        </div>
      </div>
      <div className="text-white gap-2 text-8xl font-extralight tracking-[-0.6rem]">
        <h2 className=" ">Cryoto Exchange</h2>
        <h2 className=" ">Platform</h2>
      </div>
    </motion.div>
    <motion.div
      variants={childVariant}
      className=" text-xs flex items-end text-white "
    >
      <p>
        Unlock the future of finance: explore, trade, and secure a diverse range
        of cryptocurrencies on our trusted marketplace." "Experience seamless
        trading with real-time analytics and industry-leading security at the
        forefront of every transaction." "Join a community of visionaries
      </p>
    </motion.div>
    <motion.div
      variants={childVariant}
      className="flex items-end  gap-4  justify-end"
    >
      <Card text={"This is the string that we will pass"} value={34} />
      <Card text={"This is not"} value={34} />
    </motion.div>
  </motion.div>
);

type CardProps = {
  value: number;
  text: string;
};

const Card = ({ value, text }: CardProps) => (
  <div className=" w-32 h-32 rounded-xl shadow-sm  shadow-white ring-white text-white p-6 text-right items-end">
    <h4 className="flex items-center text-lg gap-2 justify-end">
      {" "}
      <HouseIcon />+{value}K
    </h4>
    <span className="text-[6px]">{text}</span>
  </div>
);
