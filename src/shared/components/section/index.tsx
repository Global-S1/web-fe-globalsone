import { FC } from "react";
import s from "./section.module.css";
import clsx from "clsx";

interface Prop {
  children: React.ReactNode;
  extendStyle?: string;
  id?: string;
}

export const Section: FC<Prop> = ({ children, extendStyle, id }) => (
  <section id={id} className={clsx(s.section_container, extendStyle)}>
    {children}
  </section>
);
