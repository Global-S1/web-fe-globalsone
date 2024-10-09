import { Section } from "@/shared/components/section";
import clsx from "clsx";
import { IAboutUsOverviewContent } from "../../interfaces/content.interface";
import { OverviewCard } from "./overciew-card";
import s from "./overciew.module.css";
import { Leave } from "@/assets/leavesComponents/Leave";
import { LeaveClear } from "@/assets/leavesComponents/LeaveClear";

interface Props {
  content: IAboutUsOverviewContent[];
}

export const Overview = ({ content }: Props) => {
  const descriptionList = Object.values(content);
  return (
    <Section extendStyle={s.overview__section}>
      <div className={s.purple__circle}></div>
      <div className={s.green__circle}></div>
      <div className={s.overview__container}>
        <div className={clsx(s.overview__card__base, s.card__one)}>
          <OverviewCard
            title={descriptionList[0].title}
            content={descriptionList[0].content}
            index={1}
          />
        </div>
        <div className={clsx(s.overview__card__base, s.card__two)}>
          <OverviewCard
            title={descriptionList[1].title}
            content={descriptionList[1].content}
            index={2}
          />
        </div>
        <div className={clsx(s.overview__card__base, s.card__three)}>
          <OverviewCard
            title={descriptionList[2].title}
            content={descriptionList[2].content}
            index={3}
          />
          <div className={s.leave}>
            <Leave />
          </div>
          <div className={s.leaveClear}>
            <LeaveClear />
          </div>
        </div>
      </div>
    </Section>
  );
};
