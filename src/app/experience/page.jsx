"use client";

import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import Experience from "@/components/Experience/Experience";
import InfiniteSlider from "@/components/Sliders/InfiniteSlider";

const TransitionVariants = {
  initial: {
    x: "0%",
    y: "0%",
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

const ExperiencePage = () => {
  const { theme } = useTheme();
  return (
    <div
      className={`mt-40 flex flex-col items-center justify-center ${
        theme === "dark" ? "dark-bg" : "light-bg"
      }`}
    >
      <div className="container">
        <motion.div
          variants={TransitionVariants}
          initial="initial"
          exit="exit"
          animate="animate"
          transition={{ delay: 1, duration: 1, ease: "easeInOut" }}
          className=""
        >
          <h1 className="text-6xl font-bold text-center">Experience</h1>
        </motion.div>
        <motion.div
          variants={TransitionVariants}
          initial="initial"
          exit="exit"
          animate="animate"
          transition={{ delay: 1.2, duration: 1, ease: "easeInOut" }}
          className=""
        >
          <div className="mt-8">
            <div className="hidden in:flex">
              <Experience />
            </div>
            <div className="in:hidden">
              <InfiniteSlider />
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={TransitionVariants}
          initial="initial"
          exit="exit"
          animate="animate"
          transition={{ delay: 1.2, duration: 1, ease: "easeInOut" }}
          className=""
        >
          <div className="mt-8 text-center md:text-xl">
            <span className="text-md text-[#6c6b6b] dark:text-[#9c9b9b] ">
              Primarily, my focus lies within the{" "}
              <span className="text-red-500 font-bold">MERN</span> stack,
              consisting of{" "}
              <span className="text-green-500 font-bold">MongoDB</span>,{" "}
              <span className="text-orange-500 font-bold">Express.js</span>,{" "}
              <span className="text-blue-500 font-bold">React</span>, and{" "}
              <span className="text-green-600 font-bold">Node.js</span>, which I
              leverage to build dynamic and robust web applications. However, I
              maintain a continuous learning journey, exploring and mastering
              various other technologies and frameworks.
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ExperiencePage;
