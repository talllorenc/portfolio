"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import Link from "next/link";

const TransitionVariants = {
  initial: {
    x: "10%",
    y: "50%",
    opacity: 0,
  },
  animate: {
    x: "0%",
    y: "0%",
    opacity: 1,
  },
  exit: {
    x: "50%",
    y: "50%",
    opacity: 0,
  },
};

const links = [
  {
    id: 1,
    name: "instagram",
    href: "#",
    url: "/Navbar/instagram.png",
  },
  {
    id: 2,
    name: "github",
    href: "#",
    url: "/Navbar/github.png",
  },
  {
    id: 3,
    name: "telegram",
    href: "#",
    url: "/Navbar/telegram.png",
  },
];

const AboutPage = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`h-screen flex flex-col items-center justify-center ${
        theme === "dark" ? "main-bg-dark" : "main-bg-light"
      }`}
    >
      <div className="container">
        <motion.div
          variants={TransitionVariants}
          initial="initial"
          exit="exit"
          animate="animate"
          transition={{ delay: 1.2, duration: 1, ease: "easeInOut" }}
          className=""
        >
          <span className="text-md in:text-xl text-[#6c6b6b] dark:text-[#9c9b9b]">
            Hi there! My name is Alexander, and Im a web developer passionate
            about crafting digital experiences. Ive been working in web
            development for over a year, using the latest technologies to build
            robust and dynamic web applications. Im also actively engaged in
            learning both front-end and back-end development to expand my skills
            and stay updated with industry trends. From front-end development
            using <span className="text-orange-500 font-bold">HTML</span>,{" "}
            <span className="text-blue-400 font-bold">CSS</span>, and{" "}
            <span className="text-[#fdc93d] font-bold">JavaScript</span> to
            various frameworks and tools
          </span>
        </motion.div>
        <div className="flex flex-col in:flex-row in:justify-between items-center mt-4">
          <motion.div
            variants={TransitionVariants}
            initial="initial"
            exit="exit"
            animate="animate"
            transition={{ delay: 0.8, duration: 1, ease: "easeInOut" }}
            className=""
          >
            <div className="flex items-center gap-2">
              <div className="">
                <Image
                  width={70}
                  height={70}
                  className="rounded-full w-[50px] h-[50px] in:w-[70px] in:h-[70px]"
                  src="/About/me.jpg"
                  alt="profile img"
                />
              </div>
              <div className="">
                <div className="text-base font-medium text-[#6c6b6b] dark:text-[#9c9b9b]">Alexandr Boyarchuk</div>
                <div className="text-base font-medium text-[#F75380]">
                  web-developer
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={TransitionVariants}
            initial="initial"
            exit="exit"
            animate="animate"
            transition={{ delay: 1, duration: 1.3, ease: "easeInOut" }}
            className=""
          >
            <div className="flex items-center gap-4 in:gap-8 mt-6 in:mt-0">
              {links.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  target="_blank"
                  className="transistion duration-300 ease-in-out hover:scale-110"
                >
                  <Image
                    src={item.url}
                    width={40}
                    height={40}
                    alt={item.name}
                  />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
