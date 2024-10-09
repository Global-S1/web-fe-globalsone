import { Section } from "@/shared/components/section";
import { IAboutUsOurValuesContent } from "../../interfaces/content.interface";
import { CardOurdValues } from "./our-values-card";
import s from "./our-values.module.css";
import { Leave } from "@/assets/leavesComponents/Leave";
import { LeaveClear } from "@/assets/leavesComponents/LeaveClear";

interface Props {
  content: IAboutUsOurValuesContent;
}

export const OurValues = ({ content }: Props) => {
  return (
    <Section extendStyle={s.ourValues__section}>
      <div className={s.ourValues__container}>
        <div className={s.ourValues__leave}>
          <Leave />
        </div>
        <div className={s.ourValues__title__container}>
          <h2>{content.title}</h2>
        </div>
        <div className={s.ourValues__cards_container}>
          {content.values.map((item, index) => (
            <CardOurdValues
              key={index}
              title={item.title}
              content={item.content}
              img={item.img}
            ></CardOurdValues>
          ))}
          <div className={s.leave}>
            <LeaveClear />
          </div>
        </div>
      </div>
    </Section>
  );
};
