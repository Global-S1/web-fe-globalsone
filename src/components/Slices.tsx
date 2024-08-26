"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-coverflow";
import "@/app/globals.css";
import { people } from "@/moc/people.moc";


export const Slices = () => {
  const initialSlideIndex = Math.floor(people.length / 2);
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={3}
      coverflowEffect={{
        rotate: 0,
        stretch: -22,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      }}
      pagination={true}
      modules={[EffectCoverflow, Navigation]}
      className="mySwiper "
      spaceBetween={50}
      initialSlide={initialSlideIndex}
    >
      {people.map((person, index) => (
        <SwiperSlide key={index} className="">
          <div className="image-container">
            <Image
              src={person.image}
              alt={`person ${index}`}
              width={300}
              height={550}
            />
          </div>
          <div className="absolute bottom-6 left-6">
            <h3 className="text-[1.125rem]">{person.name}</h3>
            <p className="text-[0.875rem]">{person.title}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
