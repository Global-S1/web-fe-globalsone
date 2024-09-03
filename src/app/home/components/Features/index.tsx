import Section from "@/components/common/Section";
import { FeatureItem } from "./FeatureItem";
import { featureData } from "@/moc/features.moc";


const Features = () => {
  return (
    <Section styles={{ marginTop: "10rem", position: "relative" }}>
      {featureData.map((item, index) => (
        <FeatureItem key={index} {...item} />
      ))}
    </Section>
  );
};

export default Features;
