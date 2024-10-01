import s from "./home-lights.module.css";

export const HomeLights = () => {
  return (
    <div className={s.light__container}>
      <div>
        <div className={s.light__line__magenta}></div>
        <div className={s.light__line__blue}></div>
      </div>
    </div>
  );
};
