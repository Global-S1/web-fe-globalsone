import { Woman } from "@/assets/about-us/hero/icons/Woman";
import { HeroAvatarCard } from "../hero-avatar-card";
import s from "./hero-woman-card.module.css";
import Link from "next/link";

export const HeroWomanCard = () => {
  return (
    <div className={s.avatarCards__float__container_woman}>
      <HeroAvatarCard>
        <div className={s.avatar__woman__card}>
          <Woman />
        </div>
        <div className={s.description}>
          <h3>GLOBALS1</h3>
          <Link href={"#our-values"} className={s.action__btn}>
            <p>Ver más de nosotros</p>
          </Link>
        </div>
      </HeroAvatarCard>
    </div>
  );
};
