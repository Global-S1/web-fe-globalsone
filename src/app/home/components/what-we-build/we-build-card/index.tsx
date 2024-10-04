import { FC } from "react";
import clsx from "clsx";
import Image, { StaticImageData } from "next/image";
import s from "./we-build-card.module.css";

interface Prop {
  title: string;
  image: StaticImageData;
  altContent: string;
}

export const WeBuildCard: FC<Prop> = ({ title, image, altContent }) => {
  return (
    <div className={clsx(s.card_container)}>
      <div className={s.img_container}>
        <Image src={image} alt={altContent} />
      </div>
      <div className={s.text_container}>
        <h3>{title}</h3>
      </div>
    </div>
  );
};
