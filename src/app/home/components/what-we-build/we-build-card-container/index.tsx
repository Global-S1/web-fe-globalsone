import { IService } from "@/app/home/interfaces/content.interface";
import apis from "@/assets/home/what-we-build/pictures/apis.png";
import appMobil from "@/assets/home/what-we-build/pictures/app-mobil.png";
import crm from "@/assets/home/what-we-build/pictures/crm-plataform.png";
import ecommerce from "@/assets/home/what-we-build/pictures/ecommerce.png";
import trading from "@/assets/home/what-we-build/pictures/trading-plataform.png";
import { ModalWindow } from "@/shared/components/modal-window";
import { WeBuildCard } from "../we-build-card";
import s from "./we-build-card-container.module.css";

interface Props {
  services: IService[];
}

export const WhatWeBuildCardContainer = ({ services }: Props) => {
  const listImg = [trading, appMobil, ecommerce, crm, apis];
  return (
    <ModalWindow active>
      <div className={s.container_cards}>
        {services.map((item, index) => {
          const { title, alt } = item;
          return (
            <WeBuildCard
              key={index}
              altContent={alt ?? title}
              title={title}
              image={listImg[index]}
            />
          );
        })}
      </div>
    </ModalWindow>
  );
};
