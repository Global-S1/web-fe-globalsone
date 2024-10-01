import { Section } from "@/shared/components/section";
import { values } from "@/data-mock/values.moc";
import { FC } from "react";
import { CardOurdValues } from "./our-values-card";
import s from "./our-values.module.css";
import family from "@/assets/about-us/our-values/pictures/family.png"
import avatar from "@/assets/about-us/our-values/pictures/avatar.png"
import talk from "@/assets/about-us/our-values/pictures/talk.png"
import plus from "@/assets/about-us/our-values/pictures/plus.png"

export const OurValues = ({ ourValuesData }) => {
  const listImg = [family, plus, avatar, talk]
  return (
    <Section extendStyle={s.ourValues__section}>
      <div className={s.ourValues__container}>
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
              >
                {/* <item.img /> */}
              </CardOurdValues>
            );
          })}
        </div>
      </div>
    </Section>
  );
};
