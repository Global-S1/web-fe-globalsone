import clsx from "clsx";
import s from "./hero-title-left.module.css";
import { HeroTitleBgLeft } from "../hero-title-bg-left/hero-title-bg.component";

export const HeroTitleLeft = ({ title }: { title: string }) => {
  return (
    <div className={clsx(s.hero__title)}>
      <div className={s.hero__text__container}>
        <HeroTitleBgLeft />
        <h2>{title}</h2>
      </div>
    </div>
  );
};
