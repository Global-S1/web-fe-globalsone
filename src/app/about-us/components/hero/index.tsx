import { Facebook } from "@/assets/about-us/hero/icons/Facebook";
import { Instagram } from "@/assets/about-us/hero/icons/Instagram";
import { Linkedin } from "@/assets/about-us/hero/icons/Linkedin";
import { Section } from "@/shared/components/section";
import { Insides } from "@/shared/components/Insides";
import {
  IAboutUsHeroContent,
  ISocialMedia,
} from "../../interfaces/content.interface";
import { FC } from "react";
import { HeroManCard } from "./hero-man-card";
import { HeroWomanCard } from "./hero-woman-card";
import s from "./hero.module.css";

interface Props {
  content: IAboutUsHeroContent;
}

export const Hero: FC<Props> = async ({ content }) => {
  const { title, description, hookSocialMedia } = content;
  return (
    <Section extendStyle={s.hero__section}>
      <div className={s.hero__container}>
        <div className={s.hero__text__title}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        <div className={s.hero__avatarCards}>
          <div className={s.hero__avatarCards__bg}></div>
          <div className={s.hero__avatarCards__bg__green}></div>
          <div className={s.hero__avatarCards__bg__purple}></div>
          <HeroManCard />
          <HeroWomanCard />
        </div>

        <div className={s.hero__insides__container}>
          <Insides size="small" />
        </div>
        
        <div className={s.hero__socialMedia__container}>
          <p>{hookSocialMedia.title}</p>
          <div className={s.socialMedia__icons__container}>
            <a href={hookSocialMedia.links.facebook} target="__blank">
              <Facebook />
            </a>
            <a href={hookSocialMedia.links.linkedin} target="__blank">
              <Linkedin />
            </a>
            <a href={hookSocialMedia.links.instagram} target="__blank">
              <Instagram />
            </a>
          </div>
        </div> 
       
      </div>
    </Section>
  );
};
