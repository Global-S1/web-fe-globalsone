import { Section } from "@/shared/components/section";
import { CardOurdValues } from "./our-values-card";
import s from "./our-values.module.css";
import family from "@/assets/about-us/our-values/pictures/family.png";
import avatar from "@/assets/about-us/our-values/pictures/avatar.png";
import talk from "@/assets/about-us/our-values/pictures/talk.png";
import plus from "@/assets/about-us/our-values/pictures/plus.png";
import { Leave } from "@/assets/leavesComponents/Leave";

export const OurValues = ({ ourValuesData }) => {
  const listImg = [family, plus, avatar, talk];
  return (
    <Section extendStyle={s.ourValues__section}>
      <div className={s.ourValues__container}>
        <div className={s.ourValues__leave}>
          <Leave />
        </div>
        <div className={s.ourValues__title__container}>
          <h2>{ourValuesData.title}</h2>
        </div>
        <div className={s.ourValues__cards_container}>
          {ourValuesData.values.map((item, index) => {
            return (
              <CardOurdValues
                key={index}
                title={item.label}
                content={item.description}
                img={listImg[index]}
              ></CardOurdValues>
            );
          })}
        </div>
      </div>
    </Section>
  );
};
