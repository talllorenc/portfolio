import Image from "next/image";

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

const Footer = () => {
  return (
    <div className="py-4">
      <div className="container flex justify-between ">
        <div className="flex items-center gap-2">
          <Image
            width={70}
            height={70}
            className="rounded-full w-[50px] h-[50px] in:w-[70px] in:h-[70px]"
            src="/About/me.jpg"
            alt="profile img"
          />
          <div className="">
            <div className="text-base font-medium text-[#6c6b6b] dark:text-[#9c9b9b]">
              Alexandr Boyarchuk
            </div>
            <div className="text-base font-medium text-[#F75380]">
              web-developer
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 in:gap-8 mt-6 in:mt-0">
          {links.map((item) => (
            <a
              key={item.id}
              href={item.href}
              target="_blank"
              className="transistion duration-300 ease-in-out hover:scale-110"
            >
              <Image src={item.url} width={40} height={40} alt={item.name} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
