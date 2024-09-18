import Image from "next/image";
import s from "./slice.module.css"
import { FC } from "react";
import { IPeople } from "@/interfaces/IPeople";


export const Slice:FC<IPeople> = ({ src, name, jobTitle }) => {
  return (
    <div className={s.slice_container} >
      <Image src={src} alt={`${name} ${jobTitle}`} width={100} height={200} />
      <div className={s.label_image}>
        <h3>{name}</h3>
        <p>{jobTitle}</p>
      </div>
    </div>
  );
};