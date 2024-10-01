import { Section } from "@/shared/components/section";
import { values } from "@/data-mock/values.moc";
import { FC } from "react";
import s from "./our-values-card.module.css";
import Image from "next/image";

interface Prop {
  title?: string;
  content?: string;
  img?: string;
}

export const CardOurdValues: FC<Prop> = ({ title, content, img }) => {
  return (
    <div className={s.ourValues__card__container}>
      <div className={s.ourValues__title__container}>
        <Image src={img} alt={title} className={s.ourValues__title__icon} />
        <h3>{title}</h3>
      </div>
      <div className={s.ourValues__content__container}>
        <p>{content}</p>
      </div>
    </div>
  );
};
