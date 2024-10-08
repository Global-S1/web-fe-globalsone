import { Insides } from "@/shared/components/Insides";
import { FC } from "react";
import s from "./hero-metrics.module.css";

interface Props {
  title: string;
}

export const HeroMetrics: FC<Props> = ({ title }) => {
  return (
    <div className={s.heroMetrics_container}>
      <div className={s.heroMetrics_title}>
        <h2>{title}</h2>
      </div>
      <Insides size={"large"} />
    </div>
  );
};
