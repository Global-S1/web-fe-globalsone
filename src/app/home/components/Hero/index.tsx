import WindowCard from "@/components/share/window";
import { Section } from "@/components/share/section";
import { HeroTitle } from "./hero-title";
import { titles } from "@/moc/heroTitles.moc";
import { HeroArrow } from "./hero-arrow";
import Image from "next/image";
import heroImg from "@/assets/heroImg.png";
import heroPictureMobile from "@/assets/home/pictures/hero-pinctue-mobile.png";
import { HeroMetrics } from "./hero-metrics";
import s from "./hero.module.css";
import { HeroCentralPricture } from "./hero-central-picture";
import { HeroTitleBgLeft } from "./hero-title-bg-left";
import { HeroTitleBgRight } from "./hero-title-bg-right";

export const Hero = () => {
  return (
    <Section>
      <div className={s.hero_container}>
        <HeroTitleBgLeft />
        <HeroTitle {...titles[0]} />
        <HeroCentralPricture />
        <HeroTitle {...titles[1]} />
        <HeroArrow />
        <HeroTitleBgRight />
      </div>
      <div className={s.widowCard_container}>
        {/* <div className={s.blue_bg}></div> */}
        <WindowCard active>
          <HeroMetrics />
        </WindowCard>
      </div>
    </Section>
  );
};
