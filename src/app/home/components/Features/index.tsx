import Section from "@/components/common/Section";
import { FeatureItem } from "./FeatureItem";
import { featureData } from "@/moc/features.moc";

const Features = () => {
  return (
    <Section>
      {featureData.map((item, index) => (
        <FeatureItem key={index} {...item} />
      ))}
    </Section>
  );
};

export default Features;
