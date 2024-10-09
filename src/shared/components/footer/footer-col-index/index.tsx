import { FC } from "react";
import s from "./footer-col-index.module.css";

export const ColIndex = ({ title }: { title: string }) => {
  return (
    <div className={s.col_index_container}>
      <h3>{title}</h3>
    </div>
  );
};
