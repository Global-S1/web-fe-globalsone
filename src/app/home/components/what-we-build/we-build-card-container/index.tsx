import { ModalWindow } from "@/shared/components/modal-window";
import { ourService } from "@/data-mock/service.moc";
import { WeBuildCard } from "../we-build-card";
import s from "./we-build-card-container.module.css";

export const CardContainer = ({services}) => {
  return (
    <ModalWindow active>
      <div className={s.container_cards}>
        {services.map((item, index) => {
          const isLast =
            index === ourService.length - 1 && ourService.length % 2 !== 0;
          return <WeBuildCard key={index} {...item} isLast={isLast} />;
        })}
      </div>
    </ModalWindow>
  );
};
