import Image from "next/image";

const links = [
  {
    id: 1,
    name: "HTML",
    url: "/Experience/html.png",
  },
  {
    id: 2,
    name: "CSS",
    url: "/Experience/css.png",
  },
  {
    id: 3,
    name: "React",
    url: "/Experience/react.png",
  },
  {
    id: 4,
    name: "Redux",
    url: "/Experience/redux.png",
  },
  {
    id: 5,
    name: "NextJS",
    url: "/Experience/next.png",
  },
  {
    id: 6,
    name: "JavaScript",
    url: "/Experience/js.png",
  },
  {
    id: 7,
    name: "Tailwind",
    url: "/Experience/tailwind.png",
  },
  {
    id: 8,
    name: "TypeScript",
    url: "/Experience/ts.png",
  },
  {
    id: 9,
    name: "MySQL",
    url: "/Experience/mysql.png",
  },
  {
    id: 10,
    name: "NodeJS",
    url: "/Experience/node-js.png",
  },
  {
    id: 11,
    name: "stripe",
    url: "/Experience/stripe.webp",
  },
  {
    id: 12,
    name: "Framer",
    url: "/Experience/framer.png",
  },
];

const Experience = () => {
  return (
    <div className="flex flex-wrap  in:gap-2 md:gap-4 lg:gap-8 justify-center">
      {links.map((item) => (
        <div key={item.id} className="flex flex-col items-center transition duration-300 ease-in-out p-2 hover:scale-110">
          <p className="text-[#6c6b6b] dark:text-[#9c9b9b] text-lg font-medium">{item.name}</p>
          <Image src={item.url} width={80} height={80} alt={item.name} className="mt-2 in:w-[50px] md:w-[70px] lg:w-[80px]"/>
        </div>
      ))}
    </div>
  );
};

export default Experience;
