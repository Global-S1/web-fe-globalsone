import { FC } from "react";
import s from "./our-values-card.module.css";
import Image, { StaticImageData } from "next/image";

interface Prop {
  title?: string;
  content?: string;
  img?: string | StaticImageData;
}

export const CardOurdValues: FC<Prop> = ({ title, content, img }) => {
  return (
    <div className={s.ourValues__card__container}>
      <div className={s.ourValues__title__container}>
        <Image
          src={img}
          alt={title ?? "img"}
          className={s.ourValues__title__icon}
          width={100}
          height={100}
        />
        <h3>{title}</h3>
      </div>
      <div className={s.ourValues__content__container}>
        <p>{content}</p>
      </div>
    </div>
  );
};
