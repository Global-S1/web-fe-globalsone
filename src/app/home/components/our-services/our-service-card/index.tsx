import { IService } from "@/shared/interfaces/IService";
import { FC } from "react";
import s from "./our-service-card.module.css";

export const CardOurService: FC<IService> = ({ title, content, children }) => {
  return (
    <div className={s.cardOurService_container}>
      <div className={s.children_container}>{children}</div>

      <h3 className={s.title}>{title}</h3>
      <div className={s.description}>
        <p>{content}</p>
      </div>
    </div>
  );
};
