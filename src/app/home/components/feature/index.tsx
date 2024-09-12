import { Section } from "@/components/share/section";
import { FeatureItem } from "./feature-item";
import { featureData } from "@/moc/features.moc";

export const Features = () => {
  return (
    <Section>
      {featureData.map((item, index) => (
        <FeatureItem key={index} {...item} />
      ))}
    </Section>
  );
};
