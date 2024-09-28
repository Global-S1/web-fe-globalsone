import { Insides } from "@/shared/components/Insides";
import s from "./hero-metrics.module.css";
import { FC } from "react";
import { IInside } from "@/shared/interfaces/IInside";

interface Props {
 title: string;
 metrics: IInside[];
}

export const HeroMetrics:FC<Props> = ({title, metrics}) => {
  return (
    <div className={s.heroMetrics_container}>
      <div className={s.heroMetrics_title}>
        <h2>
          {title}
        </h2>
      </div>
      <Insides metrics={metrics}/>
    </div>
  );
};
