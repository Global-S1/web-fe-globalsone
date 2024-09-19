"use client";
// import { A11y, EffectFade, Autoplay } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";

// import "swiper/css";
// import clsx from "clsx";
// import React, { useRef, useState } from "react";
// import s from "./carrucel-image.module.css";
// import "./swiper-custom-styles.css";
import { people } from "@/data-mock/people.moc";
import { Slice } from "./slice";
// import { ArrowLeft } from "@/assets/icons/ArrowLeft";
// import { ArrowRight } from "@/assets/icons/ArrowRight";
// import "swiper/css/effect-fade";
// import { Swiper as SwiperType } from "swiper";

// export const CarrucelImg = () => {
//   const swiperRef = useRef<SwiperType | null>(null);
//   const [activeIndex, setActiveIndex] = useState(0);

//   const handleNext = () => {
//     if (swiperRef.current) {
//       swiperRef.current.slideNext();
//     }
//   };

//   const handlePrev = () => {
//     if (swiperRef.current) {
//       swiperRef.current.slidePrev();
//     }
//   };
//   return (
//     <div className={s.carrucel}>
//       <div className={s.view_slices}>
//         <button className={s.button} onClick={handlePrev}>
//           <ArrowLeft />
//         </button>
//         <Swiper
//           modules={[EffectFade, A11y, Autoplay]}
//           pagination={{ clickable: true }}
//           autoplay={{
//             delay: 2500,
//             disableOnInteraction: false,
//           }}
//           centeredSlides
//           initialSlide={3}
//           onSwiper={(swiper) => {
//             swiperRef.current = swiper;
//           }}
//           onSlideChange={(swiper) => {
//             setActiveIndex(swiper.activeIndex);
//           }}
//           breakpoints={{
//             300: {
//               slidesPerView: 1,
//               spaceBetween: 5,
//               slidesOffsetBefore: 0,
//             },
//             640: {
//               slidesPerView: 2,
//               spaceBetween: 40,
//               slidesOffsetAfter: -100,
//             },
//             768: {
//               slidesPerView: 2,
//               spaceBetween: 30,
//             },
//             1024: {
//               slidesPerView: 3,
//               spaceBetween: 42,
//               slidesOffsetBefore: -200,
//               slidesOffsetAfter: -200,
//             },
//             1280: {
//               slidesPerView: 3,
//               spaceBetween: 40,
//               slidesOffsetBefore: -300,
//               slidesOffsetAfter: -100,
//             },
//           }}
//         >
//           {people.map((person, index) => (
//             <SwiperSlide key={index}>
//               <Slice {...person} />
//             </SwiperSlide>
//           ))}
//         </Swiper>
//         <button className={s.button} onClick={handleNext}>
//           <ArrowRight />
//         </button>
//       </div>
//     </div>
//   );
// };

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export const CarrucelImg = () => {
  return (
    <>
      <Swiper
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
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay ]}
        className="mySwiper"
      >
        {/* <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
        {people.map((person, index) => (
            <SwiperSlide key={index}>
              <Slice {...person} />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}