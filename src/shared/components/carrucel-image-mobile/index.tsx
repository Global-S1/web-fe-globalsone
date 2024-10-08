"use client";
import { Autoplay, EffectCoverflow } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "./carrucel-image.css";

// Import Swiper styles

import { IAnny } from "@/shared/interfaces/any.interface";
import { IPeople } from "@/shared/interfaces/IPeople";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import s from "./carrucel-image-mobile.module.css";
import { Slice } from "./slice";
import { useEffect, useRef, useState } from "react";
import { peopleMobile } from "@/wp-mock-data/carrucel-mobile";
import { ArrowRight } from "@/assets/home/our-team/icons/ArrowRight";
import { ArrowLeft } from "@/assets/home/our-team/icons/ArrowLeft";

interface Props {
  content: IPeople[];
}

export const CarrucelImageMobil = ({ content }: Props) => {
  const swiperRef = useRef<IAnny>(null);
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
          modules={[Autoplay]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          loop
          breakpoints={{
            375: {},
          }}
          spaceBetween={-60}
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
          {content.map((person, index) => (
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
