import { FC } from "react";
import s from "./footer-col-index.module.css";

export const ColIndex = ({ title }) => {
  return (
    <div className={s.col_index_container}>
      <h3>{title}</h3>
    </div>
  );
};
