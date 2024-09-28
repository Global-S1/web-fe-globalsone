import { Section } from "@/shared/components/section";
import { FeatureItem } from "./feature-item";
import s from "./feature.module.css";
import groupOne from "@/assets/home/features/pictures/groupOne.png";
import groupTwo from "@/assets/home/features/pictures/groupTwo.png";
import groupThree from "@/assets/home/features/pictures/groupThree.png";
import { FC } from "react";
import { IFeatures } from "@/shared/interfaces/IFeatures";

interface IProps {
  featureData: IFeatures[];
}

export const Features: FC<IProps> = ({ featureData }) => {
  const listImg = [groupOne, groupTwo, groupThree];
  return (
    <Section>
      <div className={s.feature_container}>
        <div className={s.green_circle_one}></div>
        {featureData.map((item, index) => (
          <FeatureItem key={index} {...item} img={listImg[index].src} />
        ))}
        <div className={s.green_circle_two}></div>
      </div>
    </Section>
  );
};
