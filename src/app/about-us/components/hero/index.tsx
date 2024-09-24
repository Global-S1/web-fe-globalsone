import { Facebook } from "@/assets/icons/aboutUs/Facebook";
import { Instagram } from "@/assets/icons/aboutUs/Instagram";
import { Linkedin } from "@/assets/icons/aboutUs/Linkedin";
import { Man } from "@/assets/images/aboutUs/Man";
import { Woman } from "@/assets/images/aboutUs/Woman";
import { Section } from "@/shared/components/section";
import { Insides } from "@/components/Insides";
import s from "./hero.module.css";
import { getContentDataAboutUsPage } from "../../services/about-us.service";
import { HeroAvatarCard } from "./hero-avatar-card";

export const Hero = async ({heroData}) => {
 
  return (
    <Section>
      <div className={s.hero__container}>
        <div className={s.hero__text__title}>
          <h2>{heroData.title}</h2>
          <p>{heroData.description}</p>
        </div>
        <div className={s.hero__avatarCards}>
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
          <Insides />
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
