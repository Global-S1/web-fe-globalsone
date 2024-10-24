import Image from "next/image";
import s from "./slice.module.css";
import { IOurTeamPersonContent } from "../../our-team/interfaces/our-team.interface";

export const Slice = ({ name, img, jobposition }: IOurTeamPersonContent) => {
  return (
    <>
      <Image
        src={img}
        alt={name}
        width={100}
        height={100}
        className={s.slice__img}
      />
      <div className={s.text__container}>
        <h3>{name}</h3>
        <p>{jobposition}</p>
      </div>
    </>
  );
};
