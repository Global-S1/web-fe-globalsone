"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "@/app/globals.css";
import { people } from "@/moc/people.moc";
import { useRef, useState } from "react";
import { ArrowRight } from "@/assets/icons/ArrowRight";
import { ArrowLeft } from "@/assets/icons/ArrowLeft";

export const Slices = () => {
  const initialSlideIndex = Math.floor(people.length / 2);
  const swiperRef = useRef<any>(null);
  const [activeIndex, setActiveIndex] = useState(initialSlideIndex);

  const handlePrevClick = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNextClick = () => {
    swiperRef.current?.slideNext();
  };

  return (
    <div className="relative">
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          swiper.slideTo(initialSlideIndex);
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        breakpoints={{
          0: {
            slidesPerView: 2, // Muestra 1 slide
            spaceBetween: -10, // Espacio entre slides
          },
          // A partir de 640 píxeles
          640: {
            slidesPerView: 3, // Muestra 3 slides
            spaceBetween: 50, // Espacio entre slides
          },
        }}
        // slidesPerView={3}
        coverflowEffect={{
          rotate: 0,
          stretch: -22,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={false}
        modules={[EffectCoverflow, Navigation]}
        className="mySwiper"
        // spaceBetween={50}
        initialSlide={initialSlideIndex}
      >
        {people.map((person, index) => (
          <SwiperSlide key={index}>
            <div className="image-container">
              <Image
                src={person.image}
                alt={`person ${index}`}
                width={300}
                height={550}
              />
            </div>
            <div className="absolute w-full bottom-6 left-1/2 transform -translate-x-1/2 px-2 sm:px-8 py-3 text-center sm:text-left">
              <h3 className="text-tiny sm:text-small leading-none mb-1 sm:mb-2">{person.name}</h3>
              <p className="text-[8px] sm:text-petite">{person.title}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div
        className="swiper-button-next absolute top-1/2 right-0 transform -translate-y-1/2 z-10"
        onClick={handleNextClick}
      >
        <ArrowRight />
      </div>
      <div
        className="swiper-button-prev absolute top-1/2 left-0 transform -translate-y-1/2 z-10"
        onClick={handlePrevClick}
      >
        <ArrowLeft />
      </div>

      <div className="swiper-pagination-custom items-center absolute z-40 -bottom-[15%] sm:-bottom-[7%] left-1/2 transform -translate-x-1/2 flex space-x-20">
        {people.map((_, index) => (
          <div
            key={index}
            className={`swiper-pagination-bullet ${
              activeIndex === index ? "active" : ""
            }`}
            onClick={() => {
              swiperRef.current?.slideTo(index);
              setActiveIndex(index);
            }}
          />
        ))}
      </div>
    </div>
  );
};
