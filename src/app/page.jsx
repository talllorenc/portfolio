"use client";

import { useTheme } from "next-themes";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Typed from "typed.js";
import { FaInstagram, FaGithub, FaTelegram } from "react-icons/fa";

const TransitionVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

export default function Home() {
  const { theme } = useTheme();
  const ref = useRef(null);

  useEffect(() => {
    const typed = new Typed(ref.current, {
      strings: ["I'm alexandr lorenc"],
      typeSpeed: 100,
      cursorChar: "┃",
      startDelay: 1000,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <main
      className={`mt-24 in:mt-40 lg:mt-60 flex items-center justify-center ${
        theme === "dark" ? "dark-bg" : "light-bg"
      }`}
    >
      <div className="container flex flex-col gap-4">
        <div className="flex items-center">
          <span
            ref={ref}
            className="uppercase text-3xl in:text-6xl blinking-text font-bold text-[#F75380]"
          />
        </div>
        <motion.div
          variants={TransitionVariants}
          initial="initial"
          exit="exit"
          animate="animate"
          transition={{ delay: 1, duration: 1, ease: "easeInOut" }}
          className=""
        >
          <span className="text-lg text-[#6c6b6b] dark:text-[#9c9b9b]">
            I am a web developer specializing in website development, responsive
            web interfaces, and architecture design. I will be glad to cooperate
            with you to achieve better results. You can{" "}
            <Link
              href="/contacts"
              className="uppercase font-bold text-black dark:text-white hover:underline"
            >
              contact
            </Link>{" "}
            me if you have any questions. I use the latest{" "}
            <Link
              href="/experience"
              className="uppercase font-bold text-black dark:text-white hover:underline"
            >
              technology
            </Link>{" "}
            to achieve maximum comfort and performance of the application.
          </span>
        </motion.div>
        <motion.div
          variants={TransitionVariants}
          initial="initial"
          exit="exit"
          animate="animate"
          transition={{ delay: 1.2, duration: 1, ease: "easeInOut" }}
          className=""
        >
          <div className="flex gap-4 text-xl">
            <a
              href="#"
              target="_blank"
              className="transistion duration-300 ease-in-out hover:scale-110"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              target="_blank"
              className="transistion duration-300 ease-in-out hover:scale-110"
            >
              <FaGithub />
            </a>
            <a
              href="#"
              target="_blank"
              className="transistion duration-300 ease-in-out hover:scale-110"
            >
              <FaTelegram />
            </a>
          </div>
          <div className="mt-4">
            <div className="flex flex-col gap-1">
              <a
                href="https://www.flaticon.com/ru/free-icons/ui"
                target="_blank"
                className="transistion duration-300 text-[#17d1c6] ease-in-out hover:underline"
              >
                Icons - Flaticon
              </a>
              <a
                href="http://www.freepik.com"
                target="_blank"
                className="transistion duration-300 text-blue-500 ease-in-out hover:underline"
              >
                Designed by upklyak / Freepik
              </a>
            </div>
          </div>
          <Link
            href="/about"
            className="mr-auto mt-4 flex items-center gap-1 text-lg text-[#F75380] transistion duration-300 easy-in-out hover:translate-x-6"
          >
            See More About Me
            <Image
              src="/arrow-right.png"
              className="arrow-right-move"
              width={30}
              height={30}
              alt="arrow image"
            />
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
