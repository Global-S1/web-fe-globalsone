import { HeroTitleBgRight } from "../hero-title-bg-right";
import s from "./hero-title-right.module.css";

export const HeroTitleRight = ({ title }: { title: string }) => {
  return (
    <div className={s.hero__title}>
      <div className={s.hero__text__container}>
        <HeroTitleBgRight />
        <h2 dangerouslySetInnerHTML={{ __html: title }} />
      </div>
    </div>
  );
};
