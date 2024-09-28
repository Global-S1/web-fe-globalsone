import { FC } from "react";
import s from "./inside-statblock.module.css";
import { IInside } from "@/shared/interfaces/IInside";

export const StatBlock: FC<IInside> = ({ quantity, label }) => {
  return (
    <div className={s.statblock_container}>
      <p>{quantity}</p>
      <h3>{label}</h3>
    </div>
  );
};
