import { Star } from "@/assets/icons/Star";
import { FC } from "react";
import s from "./stars.module.css";

interface Prop {
  numStars: number;
}

export const Stars: FC<Prop> = ({ numStars }) => {
  const starsArray = Array(numStars).fill(0);

  return (
    <div className={s.stars__container}>
      {starsArray.map((_, index) => (
        <div key={index} className={s.star}>
          <Star />
        </div>
      ))}
    </div>
  );
};
