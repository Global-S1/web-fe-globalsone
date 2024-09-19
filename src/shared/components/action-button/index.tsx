import { FC } from "react";
import s from "./action-button.module.css";
interface Prop {
  text: string;
}
export const ActionButton: FC<Prop> = ({ text }) => {
  return <button className={s.button}>{text}</button>;
};
