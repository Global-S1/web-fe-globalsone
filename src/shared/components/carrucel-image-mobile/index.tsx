"use client";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./carrucel-image.css";
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
import leaf from "@/assets/leavesImg/leaf.png";

interface Props {
  content: IOurTeamPersonContent[];
}

export const CarrucelImageMobil = ({ content }: Props) => {
  const swiperRef = useRef<IAnny>(null);
  return (
    <div className={s.carrucel__container}>
      <div className={s.green__circle}></div>

      <button
        className={s.arrow_left}
        onClick={() => swiperRef.current?.slidePrev()}
      >
        <ArrowLeft />
      </button>
      <div className={s.carrucel__viewport}>
        <Swiper
          effect={""}
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 3000,
          }}
          pagination={{
            clickable: true,
            el: `.${s.pagination}`,
            bulletClass: s.bullet,
            bulletActiveClass: s.bullet_active,
          }}
          loop
          spaceBetween={30}
          centeredSlides
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {content.map((person, index) => (
            <SwiperSlide key={index}>
              <Slice {...person} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={s.bg__purpple}></div>
        <div
          className={s.leaf__two}
          style={{ backgroundImage: `url(${leaf.src})` }}
        ></div>
        <div
          className={s.leaf__three}
          style={{ backgroundImage: `url(${leaf.src})` }}
        ></div>
      </div>
      <button
        className={s.arrow_right}
        onClick={() => swiperRef.current?.slideNext()}
      >
        <ArrowRight />
      </button>
      <div className={s.pagination}></div>
    </div>
  );
};
