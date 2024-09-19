import { FC } from "react";
import s from "./section.module.css";

interface Prop {
  children: React.ReactNode;
  styles?: string;
}

export const Section: FC<Prop> = ({ children }) => (
  <section className={s.section_container}> {children} </section>
);
