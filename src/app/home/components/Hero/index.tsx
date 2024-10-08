import { Leave } from "@/assets/leavesComponents/Leave";
import { LeaveBig } from "@/assets/leavesComponents/LeaveBig";
import { HomeLights } from "@/shared/animations/home-lights-animation";
import { ModalWindow } from "@/shared/components/modal-window";
import { Section } from "@/shared/components/section";
import clsx from "clsx";
import { IHomeHeroContent } from "../../interfaces/content.interface";
import { HeroArrow } from "./hero-arrow";
import { HeroCentralPicture } from "./hero-central-picture/hero-central-picture.component";
import { HeroMetrics } from "./hero-metrics";
import { HeroTitleLeft } from "./hero-title-left";
import { HeroTitleRight } from "./hero-title-right";
import s from "./hero.module.css";

interface Props {
  content: IHomeHeroContent;
}

export const Hero = ({ content }: Props) => {
  const { insides, title } = content;
  return (
    <Section extendStyle={s.hero__section}>
      <div className={s.hero__container}>
        <HomeLights />
        <HeroTitleLeft title={title.left} />
        <HeroCentralPicture />
        <HeroTitleRight title={title.right} />
        <HeroArrow />
      </div>
      <div className={s.widowCard_container} id="metrics">
        <div className={clsx(s.leave_base, s.leave_one)}>
          <Leave style={{}} />
        </div>
        <ModalWindow active>
          <HeroMetrics title={insides} />
        </ModalWindow>
        <div className={clsx(s.leave_base, s.leave_two)}>
          <LeaveBig />
        </div>
      </div>
    </Section>
  );
};
