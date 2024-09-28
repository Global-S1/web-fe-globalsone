import { FC } from "react";
import { StatBlock } from "./inside-statblock";
import s from "./insides.module.css";
import { IInside } from "@/shared/interfaces/IInside";

interface Props {
  metrics: IInside[];
}

export const Insides: FC<Props> = ({ metrics }) => {
  return (
    <div className={s.insides__container}>
      <div className={s.first}>
        <StatBlock {...metrics[0]} />
      </div>
      <div className={s.second}>
        <StatBlock {...metrics[1]} />
      </div>
      <div className={s.third}>
        <StatBlock {...metrics[2]} />
      </div>
    </div>
  );
};
