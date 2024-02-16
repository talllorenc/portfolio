"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "100%" },
};

const links = [
  {
    id: 1,
    name: "About",
    link: "/about",
  },
  {
    id: 2,
    name: "Experience",
    link: "/experience",
  },
  {
    id: 3,
    name: "Contacts",
    link: "/contacts",
  },
];

export const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex in:hidden mr-auto items-center gap-2">
      <button
        onClick={() => setIsOpen((isOpen) => !isOpen)}
        className="rounded-full bg-white p-1 border-2 border-[#f75380]"
      >
        {isOpen ? (
          <Image
            src="/Navbar/close.png"
            width={25}
            height={25}
            alt="burger menu image"
            className=""
          />
        ) : (
          <Image
            src="/Navbar/burger-menu.png"
            width={25}
            height={25}
            alt="burger menu image"
            className=""
          />
        )}
      </button>
      <motion.nav
        className="backdrop-blur bg-white bg-opacity-30 dark:bg-black dark:bg-opacity-30 p-2 rounded-xl"
        animate={isOpen ? "open" : "closed"}
        variants={variants}
      >
        <div className="flex gap-4 items-center">
          <Link
            href="/"
            className="transistion duration-300 ease-in-out hover:scale-90"
            onClick={() => setIsOpen(false)}
          >
            <Image
              src="/Navbar/home.png"
              width={25}
              height={25}
              alt="home image"
            />
          </Link>
          {links.map((link) => (
            <Link
              onClick={() => setIsOpen(false)}
              key={link.name}
              href={link.link}
              className="text-[14px] font-bold transistion duration-300 ease-in-out hover:scale-110 hover:text-[#f75380]"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </motion.nav>
    </div>
  );
};
