import avatar from "@/assets/about-us/our-values/pictures/avatar.png";
import family from "@/assets/about-us/our-values/pictures/family.png";
import plus from "@/assets/about-us/our-values/pictures/plus.png";
import talk from "@/assets/about-us/our-values/pictures/talk.png";
import { Section } from "@/shared/components/section";
import { IAboutUsOurValuesContent } from "../../interfaces/content.interface";
import { CardOurdValues } from "./our-values-card";
import s from "./our-values.module.css";

interface Props {
  content: IAboutUsOurValuesContent;
}

export const OurValues = ({ content }: Props) => {
  const listImg = [family, plus, avatar, talk];
  return (
    <Section extendStyle={s.ourValues__section}>
      <div className={s.ourValues__container}>
        <div className={s.ourValues__title__container}>
          <h2>{content.title}</h2>
        </div>
        <div className={s.ourValues__cards_container}>
          {content.values.map((item, index) => {
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
