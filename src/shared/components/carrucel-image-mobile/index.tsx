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
import { ArrowRight } from "@/assets/home/ourTeam/icons/ArrowRight";
import { ArrowLeft } from "@/assets/home/ourTeam/icons/ArrowLeft";

export const CarrucelImageMobil = () => {
  return (
    <div className={s.carrucel__container}>
      <div className={s.arrow_left}>
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
        >
          {people.map((person, index) => (
            <SwiperSlide key={index}>
              <Slice {...person} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={s.arrow_right}>
        <ArrowRight />
      </div>
    </div>
  );
};
