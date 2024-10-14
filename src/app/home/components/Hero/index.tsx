import { HomeLights } from "@/shared/animations/home-lights-animation";
import { Section } from "@/shared/components/section";
import { IHomeHeroContent } from "../../interfaces/content.interface";
import { HeroArrow } from "./hero-arrow";
import { HeroTitleLeft } from "./hero-title-left";
import { HeroTitleRight } from "./hero-title-right";
import s from "./hero.module.css";
import { HeroCentralPicture } from "./hero-central-picture";

interface Props {
  content: IHomeHeroContent;
}

export const Hero = ({ content }: Props) => {
  const { title } = content;
  return (
    <Section extendStyle={s.hero__section}>
      <HomeLights />
      <div className={s.hero__container}>
        <HeroCentralPicture />
      </div>
      <HeroTitleLeft title={title.left} />
      <HeroTitleRight title={title.right} />
      <HeroArrow />
    </Section>
  );
};
