"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const { theme } = useTheme();
  return (
    <main
      className={`h-screen flex items-center justify-center ${
        theme === "dark" ? "dark-bg" : "light-bg"
      }`}
    >
      {/* <div className="container flex flex-col gap-4">
        <h1 className="uppercase text-4xl">I&rsquo;am alexandr lorenc</h1>
        <span className="text-lg text-[#6c6b6b] dark:text-[#9c9b9b]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          ipsam doloribus a repudiandae commodi assumenda quisquam ab maxime
          reprehenderit nam, harum ipsa sit iste esse laboriosam nulla quaerat
          ratione vitae!
        </span>
        <span className="text-lg text-[#6c6b6b] dark:text-[#9c9b9b]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          ipsam doloribus a repudiandae commodi assumenda quisquam ab maxime
          reprehenderit nam, harum ipsa sit iste esse laboriosam nulla quaerat
          ratione vitae!
        </span>
        <Link
          href="/about"
          className="mr-auto mt-4 flex items-center gap-1 text-lg text-[#F75380] transistion duration-300 easy-in-out hover:scale-110"
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
      </div> */}
    </main>
  );
}
