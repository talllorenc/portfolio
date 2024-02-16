"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import Experience from "@/components/Experience/Experience";
import InfiniteSlider from "@/components/Sliders/InfiniteSlider";

const page = () => {
  const { theme } = useTheme();
  return (
    <div
      className={`h-screen flex flex-col items-center justify-center ${
        theme === "dark" ? "main-bg-dark" : "main-bg-light"
      }`}
    >
      <div className="container">
        <Experience />
        <InfiniteSlider/>
      </div>
    </div>
  );
};

export default page;
