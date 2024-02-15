import ThemeSwitcher from "@/components/ThemeSwitcher/ThemeSwitcher";
import Image from "next/image";
import Link from "next/link";

const links = [
  {
    id: 1,
    name: "instagram",
    url: "/navbar/instagram.png",
    href: "#",
  },
  {
    id: 2,
    name: "github",
    url: "/navbar/github.png",
    href: "#",
  },
];

const Navbar = () => {
  return (
    <nav className="fixed top-0 z-[40] w-full h-[80px] bg-transparent flex justify-between items-center px-4">
      <Link href="/" className="flex flex-row gap-3 items-center">
        <div className="relative">
          <Image
            src="/navbar/main_logo.png"
            alt="logo"
            width={30}
            height={30}
            className="w-full h-full object-contain rounded-xl"
          />
        </div>
        <h1 className="text-2xl font-semibold">
          talllorenc{" "}
          <span className="font-bold text-transparent bg-clip-text bg-gradient-to-l from-[#f75380] to-[#0075ff]">
            dev
          </span>
        </h1>
      </Link>

      <div className="flex flex-row gap-5">
        <ThemeSwitcher />
        <div className="hidden in:flex items-center gap-4">
          {links.map((item) => (
            <a
              key={item.id}
              href={item.href}
              alt={item.name}
              className="transistion duration-300 ease-in-out hover:scale-90"
            >
              <Image src={item.url} width={30} height={30} alt={item.name} />
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
