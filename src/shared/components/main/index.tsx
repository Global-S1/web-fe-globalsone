import { FC } from "react";
import s from "./main.module.css"

interface Prop {
  children: React.ReactNode;
}

export const Main: FC<Prop> = ({ children }) => {
  return <main className={s.main}>{children}</main>;
};

