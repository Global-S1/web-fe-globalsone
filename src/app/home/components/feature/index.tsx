import groupOne from "@/assets/home/features/pictures/groupOne.png";
import groupThree from "@/assets/home/features/pictures/groupThree.png";
import groupTwo from "@/assets/home/features/pictures/groupTwo.png";
import { Section } from "@/shared/components/section";
import { FC } from "react";
import { IFeature } from "../../interfaces/content.interface";
import { FeatureItem } from "./feature-item";
import s from "./feature.module.css";

interface IProps {
  content: IFeature[];
}

export const Features: FC<IProps> = ({ content }) => {
  const listImg = [groupOne, groupTwo, groupThree];
  return (
    <Section>
      <div className={s.feature__container} id="features">
        <div className={s.green_circle_one}></div>
        {content.map((item, index) => (
          <FeatureItem key={index} {...item} img={listImg[index].src} />
        ))}
        <div className={s.green_circle_two}></div>
      </div>
    </Section>
  );
};
