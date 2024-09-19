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
import { getCentralTitle } from "@/services/titles";
import axios from "axios";

export const Hero = async () => {

  let res = await axios.get('http://test.local/wp-json/api/v1/get-text')
  let title = res
  let data = title.data

  console.log(data.data.right)
  return (
    <Section>
      <div className={s.hero_container}>
        <HeroTitleBgLeft />
        <HeroTitle title={data.data.left || "undefined"}  />
        <HeroCentralPricture />
        <HeroTitle title={data.data.right || "undefined"} direction={'right'} />
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
