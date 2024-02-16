"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
const slides = [
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

const InfiniteSlider = () => {
  return (

      <div className="">
        <Swiper
          modules={[Pagination]}
          spaceBetween={50} //Margin
          slidesPerView={3} //Conunt Slides
          slidesPerGroup={3} //Count Swipe
          loop={true} //Repeat
          navigation={false}
          pagination={{ clickable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="flex items-center justify-center">
                <Image
                  width={200}
                  height={200}
                  alt={slide.title}
                  src={slide.url}
                  className="rounded-xl w-full"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
  );
};

export default InfiniteSlider;
