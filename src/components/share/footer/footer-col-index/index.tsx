import { FC } from "react";
import s from "./footer-col-index.module.css";

interface IColIndex {
  title: string;
  links: string[];
}

export const ColIndex: FC<IColIndex> = ({ title, links }) => {
  return (
    <div className={s.col_index_container}>
      <h3>{title}</h3>
      <div>
        {links.map((link, index) => (
          <p key={index}>{link}</p>
        ))}
      </div>
    </div>
  );
};
