import { IService } from "@/shared/interfaces/IService";
import { FC } from "react";
import s from "./our-service-card.module.css";
import bgCard from "@/assets/home/our-services/background/bgcolors-services.png";
import Image from "next/image";

export const CardOurService: FC<IService> = ({ title, content, img }) => {
  return (
    <div
      className={s.cardOurService_container}
      style={{ backgroundImage: `url(${bgCard.src})` }}
    >
      <Image src={img} alt={title} width={100} height={100} />
      <div className={s.title__container}>
        <h3>{title}</h3>
      </div>
      <div className={s.description}>
        <p>{content}</p>
      </div>
    </div>
  );
};
