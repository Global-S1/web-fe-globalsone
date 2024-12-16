"use client";
import { ArrowLeft } from "@/assets/home/our-team/icons/ArrowLeft";
import { ArrowRight } from "@/assets/home/our-team/icons/ArrowRight";
import { IAnny } from "@/shared/interfaces/any.interface";
import { useEffect, useRef, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { IOurTeamPersonContent } from "../our-team/interfaces/our-team.interface";
import "./carrucel-image.css";
import s from "./carrucel-image.module.css";
import { Slice } from "./slice";

interface Props {
  content: IOurTeamPersonContent[];
}

export const CarrucelImg = ({ content }: Props) => {
  const swiperRef = useRef<IAnny>(null);

  const handleMouseEnter = () => {
    swiperRef.current?.autoplay?.stop();
  };

  const handleMouseLeave = () => {
    swiperRef.current?.autoplay?.start();
  };

  return (
    <div className={s.carrucel__container}>
      <button
        className={s.arrow_left}
        onClick={() => swiperRef.current?.slidePrev()}
      >
        <ArrowLeft />
      </button>
      <div className={s.carrucel__viewport}>
        <div className={s.opacity__left}></div>
        <Swiper
          loop
          slidesPerView={1}
          spaceBetween={10}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
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
          {content.map((person, index) => {
            return (
              <SwiperSlide
                key={index}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Slice {...person} />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className={s.opacity__right}></div>
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
