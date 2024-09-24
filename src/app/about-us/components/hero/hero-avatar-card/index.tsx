import { FC, ReactNode } from "react";
import s from "./hero-avatar-card.module.css";

interface Prop {
  children?: ReactNode;
  name?: string;
}

export const HeroAvatarCard: FC<Prop> = ({ children, name }) => {
  return (
    <div className={s.avatarCard__container}>
      <div className={s.avatarCard__bullets__container}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      {children}
      <div className={s.avatarCard__text__container}>
        <h3>{name}</h3>
      </div>
    </div>
  );
};
