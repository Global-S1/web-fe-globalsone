import s from "./hero-title-left.module.css";

export const HeroTitleLeft = ({ title }: { title: string }) => {
  return (
    <div className={s.hero__title}>
      <div className={s.hero__text__container}>
        <h2 className={s.hero__title__text}>
          Impulsa tu negocio con soluciones de <span>Software a medida</span>
        </h2>
      </div>
    </div>
  );
};
