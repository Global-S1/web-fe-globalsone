import { FC } from "react";
import s from "./insides.module.css";
import { getMetricsDataService } from "./service/inside.service";
import clsx from "clsx";

interface Props {
  size: "small" | "medim" | "large";
}

export const Insides: FC<Props> = async ({ size }) => {
  const {clients, projects, yearsExperience } = await getMetricsDataService();
  return (
    <div className={clsx(s.insides__container, s[`${size}__size`])}>
      <div className={clsx(s.statblock_container, s[`${size}__text`])}>
        <p>{clients.quantity}</p>
        <h3>{clients.label}</h3>
      </div>
      <div className={clsx(s.statblock_container, s[`${size}__text`])}>
        <p>{projects.quantity}</p>
        <h3>{projects.label}</h3>
      </div>
      <div className={clsx(s.statblock_container, s[`${size}__text`])}>
        <p>{yearsExperience.quantity}</p>
        <h3>{yearsExperience.label}</h3>
      </div>
    </div>
  );
};
