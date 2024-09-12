import WindowCard from "@/components/window";
import { Leave } from "@/assets/leavesComponents/Leave";
import { Section } from "@/components/share/section";
import { Insides } from "@/components/Insides";
import { HeroTitle } from "./hero-title";
import { titles } from "@/moc/heroTitles.moc";
import { HeroArrow } from "./hero-arrow";
import Image from "next/image";
import heroImg from "@/assets/heroImg.png";
import heroPictureMobile from "@/assets/home/pictures/hero-pinctue-mobile.png";
import s from "./hero.module.css";
import { HeroMetrics } from "./hero-metrics";

export const Hero = () => {
  return (
    <Section>
      <div className={s.hero_container}>
        <HeroTitle {...titles[0]} />
        <Image
          src={heroPictureMobile}
          alt="Global S1"
          className={s.hero_picture_mobile}
        />
        <Image src={heroImg} alt="Global S1" className={s.hero_picture} />
        <HeroTitle {...titles[1]} />
        <HeroArrow />
      </div>
      <WindowCard active>
        <HeroMetrics />
      </WindowCard>
    </Section>
  );
};
