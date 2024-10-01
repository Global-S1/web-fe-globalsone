import { ModalWindow } from "@/shared/components/modal-window";
import { ourService } from "@/data-mock/service.moc";
import { WeBuildCard } from "../we-build-card";
import s from "./we-build-card-container.module.css";
import appMobil from "@/assets/home/what-we-build/pictures/app-mobil.png";
import apis from "@/assets/home/what-we-build/pictures/apis.png";
import crm from "@/assets/home/what-we-build/pictures/crm-plataform.png";
import ecommerce from "@/assets/home/what-we-build/pictures/ecommerce.png";
import trading from "@/assets/home/what-we-build/pictures/trading-plataform.png";

export const WhatWeBuildCardContainer = ({ services }) => {
  const listImg = [trading, appMobil, ecommerce, crm, apis];
  return (
    <ModalWindow active>
      <div className={s.container_cards}>
        {services.map((item, index) => {
          return <WeBuildCard key={index} {...item} image={listImg[index]} />;
        })}
      </div>
    </ModalWindow>
  );
};
