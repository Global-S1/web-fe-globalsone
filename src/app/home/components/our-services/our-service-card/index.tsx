import { FC } from "react";
import s from "./our-service-card.module.css";
import { IService } from "@/app/home/interfaces/content.interface";
import Image from "next/image";

interface Props {
  service: IService;
}

export const CardOurService: FC<Props> = ({ service }) => {
  const { title, content, img } = service;
  return (
    <div className={s.cardOurService_container}>
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
