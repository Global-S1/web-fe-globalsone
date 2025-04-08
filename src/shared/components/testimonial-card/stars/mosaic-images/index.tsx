import Image from "next/image";
import { FC } from "react";
import s from "./mosaic-images.module.css";

interface Prop {
  pictures?: string[];
}

export const MosaicImages: FC<Prop> = ({ pictures }) => {
  return (
    <div className={s.mmosaic__container}>
      {pictures?.map((item, index) => (
        <Image key={index} src={item} alt="" width={134} height={91} />
      ))}
    </div>
  );
};
