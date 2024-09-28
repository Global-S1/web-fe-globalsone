import Image from "next/image";
import clsx from "clsx";
import { FC } from "react";
import s from "./mosaic-images.module.css";
import code from "@/assets/home/testimonials/pictures/code.png";
import desk from "@/assets/home/testimonials/pictures/desk.png";
import meeting from "@/assets/home/testimonials/pictures/meeting.png";
import palette from "@/assets/home/testimonials/pictures/palette.png";
import planing from "@/assets/home/testimonials/pictures/planing.png";

interface Prop {
  pictures?: any[];
}

export const MosaicImages: FC<Prop> = ({ pictures }) => {
  return (
    <div className={s.mmosaic__container}>
      <Image src={code} alt="" />
      <Image src={desk} alt="" />
      <Image src={meeting} alt="" />
      <Image src={palette} alt="" />
      <Image src={planing} alt="" />
    </div>
  );
};
