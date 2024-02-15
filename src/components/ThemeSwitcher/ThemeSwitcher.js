"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  });

  if (!mounted) {
    return null;
  }

  return (
    <div className="bg-transparent flex flex-col in:flex-row in:gap-4 in:items-center">
      <button onClick={() => setTheme("dark")} className="flex items-center gap-2 justify-between transition duration-300 easy-in-out hover:opacity-70">
        Dark
        <div className={`w-3 h-3 border ${theme === "dark" ? "bg-white" : "bg-white"}`}></div>
      </button>
      <button onClick={() => setTheme("light")} className="flex items-center gap-2 justify-between transition duration-300 easy-in-out hover:opacity-70">
        Light
        <div className={`w-3 h-3 border ${theme === "light" ? "bg-[#1f1f1f]" : "bg-[#1f1f1f]"}`}></div>
      </button>
    </div>
  );
};

export default ThemeSwitcher;
