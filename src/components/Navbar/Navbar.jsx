import ThemeSwitcher from "@/components/ThemeSwitcher/ThemeSwitcher";
import Image from "next/image";

const links = [
  {
    id: 1,
    name: "instagram",
    url: "/Navbar/instagram.png",
    href: "#",
  },
  {
    id: 2,
    name: "github",
    url: "/Navbar/github.png",
    href: "#",
  },
];

const Navbar = () => {
  return (
    <nav className="fixed top-0 z-[40] w-full h-[80px] backdrop-blur flex justify-between items-center px-4 z-[50]">
      <div href="/" className="flex flex-row gap-3 items-center">
        <div className="relative">
          <Image
            src="/Navbar/main_logo.png"
            alt="logo"
            width={30}
            height={30}
            className="w-full h-full object-contain rounded-xl"
          />
        </div>
        <h1 className="text-4xl font-semibold">CW.</h1>
      </div>
      <div className="flex gap-4">
      <ThemeSwitcher />
        <a
          download
          href="#"
          className="hidden in:block px-6 py-1 border-2 border-black dark:border-white mr-auto rounded-lg font-bold text-lg transition duration-300 ease-in-out hover:scale-110"
        >
          RESUME
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
