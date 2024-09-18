import { WindowCard } from "@/components/share/window";
import { Section } from "@/components/share/section";
import { HeroTitle } from "./hero-title";
import { titles } from "@/moc/heroTitles.moc";
import { HeroArrow } from "./hero-arrow";
import { HeroMetrics } from "./hero-metrics";
import { HeroCentralPricture } from "./hero-central-picture";
import { HeroTitleBgLeft } from "./hero-title-bg-left";
import { HeroTitleBgRight } from "./hero-title-bg-right";
import s from "./hero.module.css";
import { Leave } from "@/assets/leavesComponents/Leave";
import { LeaveBig } from "@/assets/leavesComponents/LeaveBig";
import clsx from "clsx";

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
        <div className={clsx(s.leave_base, s.leave_one)}>
          <Leave style={{}} />
        </div>
        <div className={clsx(s.leave_base, s.leave_two)}>
          <LeaveBig />
        </div>
        <WindowCard active>
          <HeroMetrics />
        </WindowCard>
      </div>
    </Section>
  );
};
