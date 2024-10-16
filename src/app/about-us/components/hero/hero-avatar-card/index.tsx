import { FC, ReactNode } from "react";
import s from "./hero-avatar-card.module.css";

interface Prop {
  children?: ReactNode;
}

export const HeroAvatarCard: FC<Prop> = ({ children }) => {
  return (
    <div className={s.avatarCard__container}>
      <div className={s.avatarCard__bullets__container}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      {children}
    </div>
  );
};
