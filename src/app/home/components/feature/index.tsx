import { Section } from "@/components/share/section";
import { FeatureItem } from "./feature-item";
import { featureData } from "@/moc/features.moc";
import s from "./feature.module.css";

export const Features = () => {
  return (
    <Section>
      <div className={s.feature_container}>
        <div className={s.green_circle_one}></div>
        {featureData.map((item, index) => (
          <FeatureItem key={index} {...item} />
        ))}
        <div className={s.green_circle_two}></div>
      </div>
    </Section>
  );
};
