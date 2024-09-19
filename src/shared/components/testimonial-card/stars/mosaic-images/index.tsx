import Image from "next/image";
import clsx from "clsx";
import { FC } from "react";
import s from "./mosaic-images.module.css";

interface Prop {
  pictures?: any[];
}

export const MosaicImages: FC<Prop> = ({ pictures }) => {
  return (
    <div className={s.mmosaic__container}>
      <Image src={""} alt="" />
      <Image src={""} alt="" />
      <Image src={""} alt="" />
      <Image src={""} alt="" />
      <Image src={""} alt="" />
    </div>
  );
};
