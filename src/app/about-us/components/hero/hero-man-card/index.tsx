import { HeroAvatarCard } from "../hero-avatar-card";
import s from "./hero-man-card.module.css";
import { Man } from "@/assets/about-us/hero/icons/Man";

export const HeroManCard = () => {
  return (
    <div className={s.avatarCards__float__container_man}>
      <HeroAvatarCard>
        <div className={s.avatar__man__card}>
          <Man />
        </div>
      </HeroAvatarCard>
    </div>
  );
};
