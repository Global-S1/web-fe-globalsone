import { FC } from "react";
import s from "./footer-col-index.module.css";
import Link from "next/link";

export const ColIndex = ({ title, link = "" }: { title: string, link: string }) => {
  return (
    <div className={s.col_index_container}>
      <Link href={link}>
        <h3>{title}</h3>
      </Link>
    </div>
  );
};
