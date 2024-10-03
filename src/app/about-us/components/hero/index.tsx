import { Facebook } from "@/assets/about-us/hero/icons/Facebook";
import { Instagram } from "@/assets/about-us/hero/icons/Instagram";
import { Linkedin } from "@/assets/about-us/hero/icons/Linkedin";
import { Man } from "@/assets/about-us/hero/icons/Man";
import { Woman } from "@/assets/about-us/hero/icons/Woman";
import { Section } from "@/shared/components/section";
import { Insides } from "@/shared/components/Insides";
import s from "./hero.module.css";
import { getContentDataAboutUsPage } from "../../services/about-us.service";
import { HeroAvatarCard } from "./hero-avatar-card";
import { LeaveClear } from "@/assets/leavesComponents/LeaveClear";
import { Leave } from "@/assets/leavesComponents/Leave";

export const Hero = async ({ heroData }) => {
  return (
    <Section extendStyle={s.hero__section}>
      <div className={s.hero__container}>
        <div className={s.hero__text__title}>
          <div className={s.hero__avatarCards__bg__green}></div>
          <h2>{heroData.title}</h2>
          <p>{heroData.description}</p>
        </div>
        <div className={s.hero__avatarCards}>
          <div className={s.hero__avatarCards__bg}></div>
          <div className={s.hero__avatarCards__bg__purple}></div>
          <div className={s.avatarCards__float__container_man}>
            <HeroAvatarCard>
              <div className={s.avatar__man__card}>
                <Man />
              </div>
            </HeroAvatarCard>
          </div>
          <div className={s.avatarCards__float__container_woman}>
            <HeroAvatarCard name={"GLOBALS1"}>
              <div className={s.avatar__woman__card}>
                <Woman />
              </div>
            </HeroAvatarCard>
          </div>
        </div>
        <div className={s.hero__insides__container}>
          <div className={s.hero__inside__leave}>
            <Leave />
          </div>
          <Insides size="small" />
        </div>
        <div className={s.hero__socialMedia__container}>
          <p>Conoce más de Nosotros:</p>
          <div className={s.socialMedia__icons__container}>
            <div>
              <Facebook />
            </div>
            <div>
              <Linkedin />
            </div>
            <div>
              <Instagram />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
