import { IService } from "@/interfaces/IService";
import { FC } from "react";
import s from "./our-service-card.module.css";

export const CardOurService: FC<IService> = ({ title, content, children }) => {
  return (
    <div className={s.cardOurService_container}>
      <div className={s.children_container}>{children}</div>
      <div className={s.title_container}>
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
};
