import Image from "next/image";
import { FC } from "react";
import s from "./slice.module.css";
import { IOurTeamPersonContent } from "../../our-team/interfaces/our-team.interface";

export const Slice: FC<IOurTeamPersonContent> = ({
  img,
  name,
  jobposition,
}) => {
  return (
    <div className={s.slice_container}>
      <Image
        src={img}
        alt={`${name} ${jobposition}`}
        width={100}
        height={200}
      />
      <div className={s.label_image}>
        <h3>{name}</h3>
        <p>{jobposition}</p>
      </div>
    </div>
  );
};
