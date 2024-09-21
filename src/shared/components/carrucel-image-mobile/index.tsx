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
import "./styles.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import s from "./carrucel-image-mobile.module.css";
import { Slice } from "./slice";
import { useEffect, useRef, useState } from "react";

export const CarrucelImageMobil = () => {
  return (
    <div className={s.carrucel__container}>
      <Swiper
        effect={"coverflow"}
        modules={[EffectCoverflow, Autoplay]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop
        centeredSlides
        spaceBetween={50}
        slidesPerView={2}
        coverflowEffect={{
          rotate: 0,
          stretch: 18,
          depth: 100,
          modifier: 1.5,
          slideShadows: true,
        }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {[...Array(8)].map((_, index) => (
          <SwiperSlide key={index}>
            <Slice />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
