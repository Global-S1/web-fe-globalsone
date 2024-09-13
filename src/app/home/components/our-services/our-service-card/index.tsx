import { IService } from "@/interfaces/IService";
import { FC } from "react";
import s from "./our-service-card.module.css";

export const CardOurService: FC<IService> = ({ title, content, children }) => {
  return (
    <div className={s.cardOurService_container}>
      <div className={s.children_container}>{children}</div>
      <div className={s.title_container}>
        <h3>{title}</h3>
        <p className="font-futura">{content}</p>
      </div>
    </div>
  );
};

// className="font-futura text-[11px] xl:text-medium w-4/5 leading-[16.5px] xl:leading-[33px]"
