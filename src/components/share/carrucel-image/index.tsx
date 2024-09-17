"use client";
import { people } from "@/moc/people.moc";
import { Slice } from "./carrucel-slice";
import { ArrowLeft } from "@/assets/icons/ArrowLeft";
import { ArrowRight } from "@/assets/icons/ArrowRight";
import { useState, useRef, useEffect } from "react";
import s from "./carrucel-image.module.css";
import next from "next";

export const CarrucelImg = () => {
  const [selectedIndex, setSelectedIndex] = useState(
    Math.floor(people.length / 2)
  ); // Comenzar desde el medio
  const [translateX, setTranslateX] = useState(0);
  const sliceRefs = useRef<(HTMLDivElement | null)[]>([]); // Array de referencias

  useEffect(() => {
    if (sliceRefs) {
      // console.log(sliceRefs.current[0].offsetWidth)
      const computedStyle = window.getComputedStyle(sliceRefs.current[0]);
      const marginRight = computedStyle.marginRight;
      const marginLeft = computedStyle.marginLeft;
      // console.log(computedStyle, marginRight, marginLeft)
    }
  }, [selectedIndex]);

  const handleNext = () => {
    console.log("next");
    setTranslateX((prev) => {
      const newIndex = prev + 280;
      return newIndex;
    });
  };

  const handlePrev = () => {
    // setSelectedIndex((prev) => Math.max(prev - 1, 0));
    setTranslateX((prev) => {
      const newIndex = prev - 280;
      return newIndex;
    });
  };

  useEffect(() => {}, []);

  return (
    <div className={s.carrucel}>
      <button className={s.left} onClick={handlePrev}>
        <ArrowLeft />
      </button>
      <div className={s.carrucel_list}>
        <div
          className={s.carrucel_track}
          style={{ transform: `translateX(-${translateX}px)` }}
        >
          {people.map((person, index) => (
            <Slice
              key={index}
              {...person}
              isCentral={index === selectedIndex}
            />
          ))}
        </div>
      </div>
      <button className={s.right} onClick={handleNext}>
        <ArrowRight />
      </button>
    </div>
  );
};
