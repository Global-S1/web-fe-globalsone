"use client";
import { Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "./carrucel-image.css";

// Import Swiper styles

import { ArrowLeft } from "@/assets/home/our-team/icons/ArrowLeft";
import { ArrowRight } from "@/assets/home/our-team/icons/ArrowRight";
import { IAnny } from "@/shared/interfaces/any.interface";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { IOurTeamPersonContent } from "../our-team/interfaces/our-team.interface";
import s from "./carrucel-image-mobile.module.css";
import { Slice } from "./slice";

interface Props {
  content: IOurTeamPersonContent[];
}

export const CarrucelImageMobil = ({ content }: Props) => {
  const swiperRef = useRef<IAnny>(null);
  return (
    <div className={s.carrucel__container}>
      <button
        className={s.arrow_left}
        onClick={() => swiperRef.current?.slidePrev()}
      >
        <ArrowLeft />
      </button>
      <div className={s.carrucel__viewport}>
        <Swiper
          effect={""}
          modules={[Autoplay]}
          autoplay={{
            delay: 2000,
            // disableOnInteraction: false,
          }}
          loop
          breakpoints={{
            375: {},
          }}
          spaceBetween={180}
          centeredSlides
          // slidesPerView={2}
          // coverflowEffect={{
          //   rotate: 0,
          //   stretch: 18,
          //   depth: 100,
          //   modifier: 1.5,
          //   slideShadows: true,
          // }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {content.map((person, index) => (
            <SwiperSlide key={index}>
              <Slice {...person} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <button
        className={s.arrow_right}
        onClick={() => swiperRef.current?.slideNext()}
      >
        <ArrowRight />
      </button>
    </div>
  );
};
