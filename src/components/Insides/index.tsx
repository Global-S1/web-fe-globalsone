import { FC } from "react";
import { InsideData } from "@/data-mock/insides.moc";
import { StatBlock } from "./inside-statblock";
import s from "./insides.module.css";

export const Insides: FC = () => {
  return (
    <div className={s.insides_container}>
      <div className={s.first}>
        <StatBlock {...InsideData[0]} />
      </div>
      <div className={s.second}>
        <StatBlock {...InsideData[1]} />
      </div>
      <div className={s.third}>
        <StatBlock {...InsideData[2]} />
      </div>
    </div>
  );
};
