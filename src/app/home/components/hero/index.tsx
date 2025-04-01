import { HomeLights } from "@/shared/animations/home-lights-animation";
import { Section } from "@/shared/components/section";
import { IHomeHeroContent } from "../../interfaces/content.interface";
import { HeroBubbleChatBot } from "./hero-bubble-chat-bot";
import { HeroCentralPicture } from "./hero-central-picture";
import { HeroTitleLeft } from "./hero-title-left";
import s from "./hero.module.css";

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

      <HeroBubbleChatBot />
    </Section>
  );
};
