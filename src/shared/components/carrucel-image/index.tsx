"use client";
import React, { useRef, useState } from "react";
import { Autoplay, Pagination, Navigation, A11y } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Slice } from "./slice";
import "swiper/css";
import "swiper/css/pagination";
import { people } from "@/data-mock/people.moc";
import s from "./carrucel-image.module.css";
import "./carrucel-image.css";
import { ArrowLeft } from "@/assets/home/our-team/icons/ArrowLeft";
import { ArrowRight } from "@/assets/home/our-team/icons/ArrowRight";

export const CarrucelImg = () => {
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
        <div className={s.opacity__left}></div>
        <Swiper
          loop
          slidesPerView={1}
          spaceBetween={10}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 31,
            },
          }}
          modules={[Autoplay, A11y]}
          className="mySwiper"
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {people.map((person, index) => (
            <SwiperSlide key={index}>
              <Slice {...person} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={s.opacity__right}></div>
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
