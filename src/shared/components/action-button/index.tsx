import { FC } from "react";
import s from "./action-button.module.css";
import clsx from "clsx";
interface Prop {
  text: string;
  extendStyle?: string;
  type?: "button" | "submit" | "reset";
}
export const ActionButton: FC<Prop> = ({ text, extendStyle, type = "button" }) => {
  return <button type={type} className={clsx(s.button, extendStyle)}>{text}</button>;
};
