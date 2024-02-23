"use client";

import { useLayoutEffect } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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

const AboutPage = () => {
  const { theme } = useTheme();

  useLayoutEffect(() => {
    const comments = document.querySelectorAll(".animate-block");
    comments.forEach((comment) => {
      gsap.to(comment, {
        opacity: 1,
        y: -100,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: comment,
          start: "top-=200px center",
          end: "top-=40px center+=30px",
          scrub: 2,
          markers: false,
        },
      });
    });

    gsap.to("#animation-line-about", {
      height: "100%",
      ease: "none",
      scrollTrigger: {
        trigger: "#animation-container-about",
        scrub: true,
        markers: false,
        start: "top center+=150px",
        end: "bottom center+=230px",
      },
    });
  }, []);

  return (
    <div className={`mt-40 ${theme === "dark" ? "dark-bg" : "light-bg"}`}>
      <div className="container flex flex-col gap-20 ">
        <motion.div
          variants={TransitionVariants}
          initial="initial"
          exit="exit"
          animate="animate"
          transition={{ delay: 1, duration: 1, ease: "easeInOut" }}
          className=""
        >
          <div className="flex flex-col gap-12 items-center">
            <h1 className="text-6xl font-bold text-center">About me</h1>
            <span className="text-lg in:text-xl text-[#6c6b6b] dark:text-[#9c9b9b]">
              Hi there! My name is Alexander, and Im a web developer passionate
              about crafting digital experiences. Ive been working in web
              development for over a year, using the latest technologies to
              build robust and dynamic web applications. Im also actively
              engaged in learning both front-end and back-end development to
              expand my skills and stay updated with industry trends. From
              front-end development using{" "}
              <span className="text-orange-500 font-bold">HTML</span>,{" "}
              <span className="text-blue-400 font-bold">CSS</span>, and{" "}
              <span className="text-[#fdc93d] font-bold">JavaScript</span> to
              various frameworks and tools
            </span>
            <div className="flex flex-col items-center">
              <p className="text-xl font-bold text-[#f75380]">SCROLL</p>
              <Image
                src="/arrow-right.png"
                className="arrow-bottom-move"
                width={30}
                height={30}
                alt="arrow image"
              />
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
          <div id="animation-container-about" className="flex gap-8 relative">
            <div
              id="animation-line-about"
              className="w-[2px] bg-[#f75380] hidden md:block absolute left-1/2 -translate-x-1/2"
            >
              <span className="absolute -translate-x-1/2 left-1/2 bottom-0 w-3 h-3 border-2 border-[#f75380] rounded-full bg-black dark:bg-white block"></span>
            </div>
            <div className="flex flex-col gap-12">
              <div
                id="div1"
                className="animate-block flex justify-between gap-16"
              >
                <div className="md:w-1/2">
                  <span className="px-4 py-1 text-2xl font-bold bg-[#f75380] mr-auto rounded-xl">
                    1
                  </span>
                  <p className="text-2xl font-medium mt-4">Constant progress</p>
                  <span className="text-lg text-[#6c6b6b] dark:text-[#9c9b9b]">
                    Not a day went by that I didnt learn something. Every day I
                    improve my programming and architecture skills. I believe
                    that consistency is the key to success in any aspect of
                    life.
                  </span>
                </div>
                <div className="w-1/2 hidden md:block"></div>
              </div>
              <div
                id="div2"
                className="opacity-0 animate-block flex justify-between gap-16"
              >
                <div className="w-1/2 hidden md:block"></div>
                <div className="md:w-1/2">
                  <span className="px-4 py-1 text-2xl font-bold bg-[#f75380] mr-auto rounded-xl">
                    2
                  </span>
                  <p className="text-2xl font-medium mt-4">
                    Personal Qualities
                  </p>
                  <span className="text-lg text-[#6c6b6b] dark:text-[#9c9b9b]">
                    I am an attentive, inquisitive, responsible and, most
                    importantly, a purposeful person. These qualities help me
                    improve and get better every day.
                  </span>
                </div>
              </div>
              <div
                id="div3"
                className="opacity-0 animate-block flex justify-between gap-16"
              >
                <div className="md:w-1/2">
                  <span className="px-4 py-1 text-2xl font-bold bg-[#f75380] mr-auto rounded-xl">
                    3
                  </span>
                  <p className="text-2xl font-medium mt-4">
                    Commercial Development Experience
                  </p>
                  <span className="text-lg text-[#6c6b6b] dark:text-[#9c9b9b]">
                    With hands-on experience in this field, Ive navigated
                    through various projects, honing my skills and understanding
                    the intricacies of the commercial programming. This
                    expertise equips me to tackle challenges effectively and
                    deliver innovative solutions.
                  </span>
                </div>
                <div className="w-1/2 hidden md:block"></div>
              </div>
              <div
                id="div4"
                className="opacity-0 animate-block flex justify-between gap-16"
              >
                <div className="w-1/2 hidden md:block"></div>

                <div className="md:w-1/2">
                  <span className="px-4 py-1 text-2xl font-bold bg-[#f75380] mr-auto rounded-xl">
                    4
                  </span>
                  <p className="text-2xl font-medium mt-4">Technology Stack</p>
                  <span className="text-lg text-[#6c6b6b] dark:text-[#9c9b9b]">
                    At the moment, my main stack is MERN. Using these advanced
                    technologies, I create reliable and dynamic web applications
                    that meet modern requirements.
                  </span>
                </div>
              </div>
              <div
                id="div5"
                className="opacity-0 animate-block flex justify-between gap-16"
              >
                <div className="md:w-1/2">
                  <span className="px-4 py-1 text-2xl font-bold bg-[#f75380] mr-auto rounded-xl">
                    5
                  </span>
                  <p className="text-2xl font-medium mt-4">Open to Learning</p>
                  <span className="text-lg text-[#6c6b6b] dark:text-[#9c9b9b]">
                    I firmly believe that growth stems from embracing new
                    challenges and acquiring fresh knowledge. With an insatiable
                    curiosity and a proactive attitude, I eagerly welcome
                    opportunities to expand my skill set and stay at the
                    forefront of innovation
                  </span>
                </div>
                <div className="w-1/2 hidden md:block"></div>
              </div>
              <div className="opacity-0 h-[150px]"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
