import { DobleDonwArrow } from "@/assets/home/hero/icons/DobleDonwArrow";
import s from "./hero-arrow.module.css";

export const HeroArrow = () => {
  return (
    <div className={s.hero__arrow}>
      <div className={s.arrow__container}>
        <DobleDonwArrow />
      </div>
      <p>Ver más</p>
      <div className={s.arrow__container}>
        <DobleDonwArrow />
      </div>
    </div>
  );
};
