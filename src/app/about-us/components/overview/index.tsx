import { Section } from "@/shared/components/section";
import { CSSProperties, FC } from "react";
import s from "./overciew.module.css";
import { OverviewCard } from "./overciew-card";
import clsx from "clsx";

export const Overview = ({ overviewData }) => {
  return (
    <Section>
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
      {/* <div className="flex justify-center items-center">
        {steps.map((item, index) => (
          <Step
            key={index}
            title={item.title}
            content={item.content}
            style={
              index === 1
                ? {
                    background: "#19DBCA",
                    borderBottomLeftRadius: 0,
                    borderBottomRightRadius: 0,
                    color: "black",
                  }
                : {
                    border: "1px solid rgba(251, 251, 251, 0.3)",
                    background:
                      "linear-gradient(180deg, rgba(25,219,202,0.27) 7%, rgba(115,115,115,0) 100%)",
                  }
            }
            index={index + 1}
          />
        ))} */}
      {/* </div> */}
    </Section>
  );
};
