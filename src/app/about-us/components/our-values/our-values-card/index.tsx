import { Section } from "@/shared/components/section";
import { values } from "@/data-mock/values.moc";
import { FC } from "react";
import s from "./our-values-card.module.css";

interface Prop {
  title?: string;
  content?: string;
  children?: React.ReactNode;
  rotateColor?: number;
}

export const CarOurdValues: FC<Prop> = ({
  title,
  content,
  children,
  rotateColor,
}) => {
  return (
    <div className={s.ourValues__card__container}>
      <div className={s.ourValues__title__container}>
        <div className={s.ourValues__title__icon}></div>
        <h3>{title}</h3>
      </div>
      <div className={s.ourValues__content__container}>
        <p>{content}</p>
      </div>
    </div>
  );
};
