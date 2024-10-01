import { FC } from "react";
import s from "./insides.module.css";
import { getMetricsDataService } from "./service/inside.service";
import clsx from "clsx";

interface Props {
  size: "small" | "medim" | "large";
}

export const Insides: FC<Props> = async ({ size }) => {
  const { metrics } = await getMetricsDataService();
  return (
    <div className={clsx(s.insides__container, s[`${size}__size`])}>
      <div className={clsx(s.statblock_container, s[`${size}__text`])}>
        <p>{metrics[0].quantity}</p>
        <h3>{metrics[0].label}</h3>
      </div>
      <div className={clsx(s.statblock_container, s[`${size}__text`])}>
        <p>{metrics[1].quantity}</p>
        <h3>{metrics[1].label}</h3>
      </div>
      <div className={clsx(s.statblock_container, s[`${size}__text`])}>
        <p>{metrics[2].quantity}</p>
        <h3>{metrics[2].label}</h3>
      </div>
    </div>
  );
};
