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
  const listPictureStyle = [
    s.pictureStyle__style__1,
    s.pictureStyle__style__2,
    s.pictureStyle__style__3,
  ];
  return (
    <Section extendStyle={s.feature__section}>
      <div className={s.feature__container} id="features">
        <div className={s.green_circle_one}></div>
        {content.map((item, index) => (
          <FeatureItem
            key={index}
            {...item}
            img={listImg[index].src}
            pictureStyle={listPictureStyle[index]}
          />
        ))}
        <div className={s.green_circle_two}></div>
      </div>
    </Section>
  );
};
