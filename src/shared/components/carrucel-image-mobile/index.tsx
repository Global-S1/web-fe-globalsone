"use client";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "./carrucel-image.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import s from "./carrucel-image-mobile.module.css";
import { Slice } from "./slice";
import { useEffect, useRef, useState } from "react";
import { people } from "@/data-mock/people.moc";
import { ArrowRight } from "@/assets/home/our-team/icons/ArrowRight";
import { ArrowLeft } from "@/assets/home/our-team/icons/ArrowLeft";

export const CarrucelImageMobil = () => {
  const swiperRef = useRef(null);
  return (
    <div className={s.carrucel__container}>
      <div
        className={s.arrow_left}
        onClick={() => swiperRef.current?.slidePrev()}
      >
        <ArrowLeft />
      </div>
      <div className={s.carrucel__viewport}>
        <Swiper
          effect={"coverflow"}
          modules={[EffectCoverflow, Autoplay]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          loop
          breakpoints={{
            375: {},
          }}
          spaceBetween={50}
          centeredSlides
          slidesPerView={2}
          coverflowEffect={{
            rotate: 0,
            stretch: 18,
            depth: 100,
            modifier: 1.5,
            slideShadows: true,
          }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {people.map((person, index) => (
            <SwiperSlide key={index}>
              <Slice {...person} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div
        className={s.arrow_right}
        onClick={() => swiperRef.current?.slideNext()}
      >
        <ArrowRight />
      </div>
    </div>
  );
};
