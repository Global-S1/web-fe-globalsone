import { FC } from "react";
import clsx from "clsx";
import { ITitleData } from "@/interfaces/ITitleData";
import s from "./hero-title.module.css";

export const HeroTitle: FC<ITitleData> = ({ title, direction = "left" }) => {
  const directionStyle = {
    left: s.hero_title_left,
    right: s.hero_title_right,
  };
  return (
    <div className={clsx(s.hero_title, directionStyle[direction])}>
      <h2 className="whitespace-pre-line">{title}</h2>
    </div>
  );
};
