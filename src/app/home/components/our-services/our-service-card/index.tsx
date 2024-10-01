import { IService } from "@/shared/interfaces/IService";
import { FC } from "react";
import s from "./our-service-card.module.css";
import bgCard from "@/assets/home/our-services/background/bgcolors-services.png";

export const CardOurService: FC<IService> = ({ title, content, children }) => {
  return (
    <div
      className={s.cardOurService_container}
      style={{ backgroundImage: `url(${bgCard.src})` }}
    >
      <h3 className={s.title}>{title}</h3>
      <div className={s.children_container}>{children}</div>
      <div className={s.description}>
        <p>{content}</p>
      </div>
    </div>
  );
};
