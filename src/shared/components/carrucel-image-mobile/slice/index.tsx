import Image from "next/image";
import s from "./slice.module.css";
import { IOurTeamPersonContent } from "../../our-team/interfaces/our-team.interface";

export const Slice = ({ name, img }: IOurTeamPersonContent) => {
  return (
    <div className="slice__container__custom">
      <div className="slice__float__container">
        <div className={s.slice__body__container}>
          <Image src={img} alt={name} width={100} height={100} />
          <div className="slice__body__title">
            <h3>{name}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
