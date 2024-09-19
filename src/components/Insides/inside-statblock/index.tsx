import { FC } from "react";
import { IInsidesData } from "@/shared/interfaces/IInsidesData";
import s from "./inside-statblock.module.css";

export const StatBlock: FC<IInsidesData> = ({ number, label }) => {
  return (
    <div className={s.statblock_container}>
      <p>{number}</p>
      <h3>{label}</h3>
    </div>
  );
};
