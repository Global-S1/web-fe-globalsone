import { IService } from "@/app/home/interfaces/content.interface";
import { ModalWindow } from "@/shared/components/modal-window";
import { WeBuildCard } from "../we-build-card";
import s from "./we-build-card-container.module.css";

interface Props {
  services: IService[];
}

export const WhatWeBuildCardContainer = ({ services }: Props) => {
  return (
    <ModalWindow active showGradient color="#2D2A57">
      <div className={s.container_cards}>
        {services.map((item, index) => {
          const { title, alt } = item;
          return (
            <WeBuildCard
              key={index}
              altContent={alt ?? title}
              title={title}
              image={item.img || ""}
            />
          );
        })}
      </div>
    </ModalWindow>
  );
};
