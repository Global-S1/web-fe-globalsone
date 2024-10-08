import { FC } from "react";
import s from "./our-service-card.module.css";
import bgCard from "@/assets/home/our-services/background/bgcolors-services.png";
import { IService } from "@/app/home/interfaces/content.interface";

interface Props {
  service: IService;
  children: React.ReactNode;
}

export const CardOurService: FC<Props> = ({ service, children }) => {
  const { title, content } = service;
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
