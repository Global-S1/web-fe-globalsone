"use client";

import { DobleDonwArrow } from "@/assets/home/hero/icons/DobleDonwArrow";
import s from "./hero-arrow.module.css";

export const HeroArrow = () => {
  const handleMetrics = () => {
    document.getElementById("metrics")?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <a onClick={handleMetrics} className={s.hero__arrow}>
      <div className={s.arrow__container}>
        <DobleDonwArrow />
      </div>
      <p>Ver más</p>
      <div className={s.arrow__container}>
        <DobleDonwArrow />
      </div>
    </a>
  );
};
