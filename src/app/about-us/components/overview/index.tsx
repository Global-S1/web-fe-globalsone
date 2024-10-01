import { Section } from "@/shared/components/section";
import { CSSProperties, FC } from "react";
import s from "./overciew.module.css";
import { OverviewCard } from "./overciew-card";
import clsx from "clsx";

export const Overview = ({ overviewData }) => {
  return (
    <Section extendStyle={s.overview__section}>
      <div className={s.overview__container}>
        <div className={clsx(s.overview__card__base, s.card__one)}>
          <OverviewCard
            title={overviewData[0].title}
            content={overviewData[0].description}
            index={1}
          />
        </div>
        <div className={clsx(s.overview__card__base, s.card__two)}>
          <OverviewCard
            title={overviewData[1].title}
            content={overviewData[1].description}
            index={2}
          />
        </div>
        <div className={clsx(s.overview__card__base, s.card__three)}>
          <OverviewCard
            title={overviewData[2].title}
            content={overviewData[2].description}
            index={3}
          />
        </div>
      </div>
    </Section>
  );
};
