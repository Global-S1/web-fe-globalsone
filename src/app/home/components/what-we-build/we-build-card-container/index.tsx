import { WindowCard } from "@/shared/components/window";
import { ourService } from "@/data-mock/service.moc";
import { WeBuildCard } from "../we-build-card";
import s from "./we-build-card-container.module.css";

export const CardContainer = () => {
  return (
    <WindowCard active>
      <div className={s.container_cards}>
        {ourService.map((item, index) => {
          const isLast =
            index === ourService.length - 1 && ourService.length % 2 !== 0;
          return <WeBuildCard key={index} {...item} isLast={isLast} />;
        })}
      </div>
    </WindowCard>
  );
};
