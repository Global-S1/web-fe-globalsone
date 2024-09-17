"use client";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import clsx from "clsx";
import React, { useRef, useState } from "react";
import s from "./carrucel-image-two.module.css";
import "./swiper-custom-styles.css";
import { people } from "@/moc/people.moc";
import { Slice } from "./slice";
import { ArrowLeft } from "@/assets/icons/ArrowLeft";
import { ArrowRight } from "@/assets/icons/ArrowRight";

export const CarrucelImg = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    swiperRef.current.slideNext();
  };

  const handlePrev = () => {
    swiperRef.current.slidePrev();
  };
  return (
    <div className={s.carrucel}>
      <div className={s.view_slices}>
        <button className={s.button} onClick={handlePrev}>
          <ArrowLeft />
        </button>
        <Swiper
          modules={[A11y]}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.activeIndex);
          }}
          breakpoints={{
            300: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 28,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 42,
            },
            1228: {
              slidesPerView: 3,
              spaceBetween: 130,
            },
          }}
        >
          {people.map((person, index) => (
            <SwiperSlide key={index}>
              <Slice {...person} />
            </SwiperSlide>
          ))}
        </Swiper>
        <button className={s.button} onClick={handleNext}>
          <ArrowRight />
        </button>
      </div>
      <div className={s.bullets_container}>
        <div>
          {Array.from({ length: people.length }).map((_, index) => (
            <span
              key={index}
              onClick={() => swiperRef.current.slideTo(index)}
              className={clsx(s.bullet, {
                [s.active]:
                  swiperRef.current && swiperRef.current.activeIndex === index,
              })}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
