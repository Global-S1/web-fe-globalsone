import { WindowCard } from "@/shared/components/window";
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
import { getCentralTitle } from "../../service/home.service";

export const Hero = async () => {
  const data = await getCentralTitle();

  return (
    <Section>
      <div className={s.hero_container}>
        <div className={s.light_line}></div>
        <HeroTitleBgLeft />
        <HeroTitle title={data.left || "undefined"} />
        <HeroCentralPricture />
        <HeroTitle title={data.right || "undefined"} direction={"right"} />
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
        <WindowCard active>
          <HeroMetrics />
        </WindowCard>
      </div>
    </Section>
  );
};
