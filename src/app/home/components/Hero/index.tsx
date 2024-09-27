import { ModalWindow } from "@/shared/components/modal-window";
import { Section } from "@/shared/components/section";
import { HeroTitle } from "./hero-title";
import { HeroArrow } from "./hero-arrow";
import { HeroMetrics } from "./hero-metrics";
import { HeroCentralPricture } from "./hero-central-picture";
import { HeroTitleBgLeft } from "./hero-title-bg-left";
import { HeroTitleBgRight } from "./hero-title-bg-right";
import s from "./hero.module.css";
import { Leave } from "@/assets/leavesComponents/Leave";
import { LeaveBig } from "@/assets/leavesComponents/LeaveBig";
import clsx from "clsx";
import { HomeLights } from "@/shared/animations/home-lights";
import { HeroTitleLeft } from "./hero-title-left";
import { HeroTitleRight } from "./hero-title-right";

export const Hero = ({ heroData }) => {
  return (
    <Section extendStyle={s.hero__section}>
      <div className={s.hero__container}>
        <HomeLights />
        {/* <HeroTitleBgLeft /> */}
        {/* <HeroTitle title={heroData.left || "undefined"} /> */}

        <HeroTitleLeft title={heroData.left || ""} />
        <HeroCentralPricture />
        {/* 
        <HeroTitle title={heroData.right || "undefined"} direction={"right"} />
        <HeroTitleBgRight /> */}
        <HeroTitleRight title={heroData.right || "undefined"} />
        <HeroArrow />
      </div>
      <div className={s.widowCard_container}>
        <div className={clsx(s.leave_base, s.leave_one)}>
          <Leave style={{}} />
        </div>
        <div className={clsx(s.leave_base, s.leave_two)}>
          <LeaveBig />
        </div>
        <ModalWindow active>
          <HeroMetrics />
        </ModalWindow>
      </div>
    </Section>
  );
};
