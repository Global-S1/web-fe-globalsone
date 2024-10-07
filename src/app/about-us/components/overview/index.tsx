import { Section } from "@/shared/components/section";
import clsx from "clsx";
import { IAboutUsOverviewContent } from "../../interfaces/content.interface";
import { OverviewCard } from "./overciew-card";
import s from "./overciew.module.css";

interface Props {
  content: IAboutUsOverviewContent[];
}

export const Overview = ({ content }: Props) => {
  return (
    <Section extendStyle={s.overview__section}>
      <div className={s.overview__container}>
        <div className={clsx(s.overview__card__base, s.card__one)}>
          <OverviewCard
            title={content[0].title}
            content={content[0].description}
            index={1}
          />
        </div>
        <div className={clsx(s.overview__card__base, s.card__two)}>
          <OverviewCard
            title={content[1].title}
            content={content[1].description}
            index={2}
          />
        </div>
        <div className={clsx(s.overview__card__base, s.card__three)}>
          <OverviewCard
            title={content[2].title}
            content={content[2].description}
            index={3}
          />
        </div>
      </div>
    </Section>
  );
};
