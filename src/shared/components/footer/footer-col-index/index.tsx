import { FC } from "react";
import s from "./footer-col-index.module.css";
import Link from "next/link";

interface Props {
  title: string;
  route: string;
}

export const ColIndex = ({ title, route }: Props) => {
  return (
    <Link href={route} className={s.col_index_container}>
      <h3>{title}</h3>
    </Link>
  );
};
