import { Section } from "@/shared/components/section";
import { FeatureItem } from "./feature-item";
import s from "./feature.module.css";
import groupOne from "@/assets/images/groupOne.png";
import groupTwo from "@/assets/images/groupTwo.png";
import groupThree from "@/assets/images/groupThree.png";

export const Features = ({ featureData }) => {
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
