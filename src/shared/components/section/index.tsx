import { FC } from "react";
import s from "./section.module.css";
import clsx from "clsx";

interface Prop {
  children: React.ReactNode;
  extendStyle?: string;
}

export const Section: FC<Prop> = ({ children, extendStyle }) => (
  <section className={clsx(s.section_container, extendStyle)}>
    {children}
  </section>
);
