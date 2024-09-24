import { FC } from "react";
import s from "./overciew-card.module.css";

interface Prop {
  title: string;
  content: string;
  index: string | number;
}

export const OverviewCard: FC<Prop> = ({ title, content, index }) => {
  return (
    <div className={s.overviewCard__card__container}>
      <div className={s.number}>
        <p>{index}.</p>
      </div>
      <div className={s.overviewCard__text_container}>
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
};
