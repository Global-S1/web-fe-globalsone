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

export const Hero = ({ heroData }) => {
  console.log("soy heroData", heroData);
  return (
    <Section>
      <div className={s.hero_container}>
        <div className={s.light_line}></div>
        <HeroTitleBgLeft />
        <HeroTitle title={heroData.left || "undefined"} />
        <HeroCentralPricture />
        <HeroTitle title={heroData.right || "undefined"} direction={"right"} />
        <HeroArrow />
        <div className={s.light_line_blue}></div>
        <HeroTitleBgRight />
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
