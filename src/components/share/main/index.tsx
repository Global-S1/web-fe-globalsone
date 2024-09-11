import { FC } from "react";
import s from "./main.module.css"

interface Prop {
  children: React.ReactNode;
}

const Main: FC<Prop> = ({ children }) => {
  return <main className={s.main}>{children}</main>;
};

export default Main;
