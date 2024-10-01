import { ModalWindow } from "@/shared/components/modal-window";
import { Section } from "@/shared/components/section";
import { HeroArrow } from "./hero-arrow";
import { HeroMetrics } from "./hero-metrics";
import { HeroCentralPricture } from "./hero-central-picture";
import { Leave } from "@/assets/leavesComponents/Leave";
import { LeaveBig } from "@/assets/leavesComponents/LeaveBig";
import clsx from "clsx";
import { HomeLights } from "@/shared/animations/home-lights-animation";
import { HeroTitleLeft } from "./hero-title-left";
import { HeroTitleRight } from "./hero-title-right";
import { FC } from "react";
import { IInside } from "@/shared/interfaces/IInside";
import s from "./hero.module.css";

interface Props {
  title: {
    left: string;
    right: string;
  };
  insides: {
    title: string;
    metrics: IInside[];
  };
}

export const Hero: FC<Props> = ({ title, insides }) => {
  return (
    <Section extendStyle={s.hero__section}>
      <div className={s.hero__container}>
        <HomeLights />
        <HeroTitleLeft title={title.left} />
        <HeroCentralPricture />
        <HeroTitleRight title={title.right} />
        <HeroArrow />
      </div>
      <div className={s.widowCard_container}>
        <div className={clsx(s.leave_base, s.leave_one)}>
          <Leave style={{}} />
        </div>
        <ModalWindow active>
          <HeroMetrics {...insides} />
        </ModalWindow>
        <div className={clsx(s.leave_base, s.leave_two)}>
          <LeaveBig />
        </div>
      </div>
    </Section>
  );
};
