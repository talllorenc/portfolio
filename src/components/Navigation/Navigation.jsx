"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Transition from "./Transistion";

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

const Navigation = () => {
  const [isRouting, setisRouting] = useState(false);
  const path = usePathname();
  const [prevPath, setPrevPath] = useState("/");

  useEffect(() => {
    if (prevPath !== path) {
      setisRouting(true);
    }
  }, [path, prevPath]);

  useEffect(() => {
    if (isRouting) {
      setPrevPath(path);
      const timeout = setTimeout(() => {
        setisRouting(false);
      }, 1200);

      return () => clearTimeout(timeout);
    }
  }, [isRouting]);

  return (
    <div className="fixed bottom-0 left-0 right-0  flex justify-center items-center p-4 bg-transparent z-[50]">
      {isRouting && <Transition />}
      <div className="flex items-center text-xl font-bold border-t-2 border-[#767676] px-4 py-1 rounded-full shadow-lg shadow-[#F75380]">
        <Link href="/" className="transistion duration-300 ease-in-out mr-4 hover:scale-90">
          <Image
            src="/navbar/home.png"
            width={30}
            height={30}
            alt="home image"
          />
        </Link>
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.link}
            className="transistion duration-300 ease-in-out px-4 hover:scale-110 hover:text-[#f75380]"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navigation;
