import { DobleDonwArrow } from "@/assets/home/hero/icons/DobleDonwArrow";
import s from "./hero-arrow.module.css";

export const HeroArrow = () => {
  return (
    <a href="#metrics" className={s.hero__arrow}>
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
