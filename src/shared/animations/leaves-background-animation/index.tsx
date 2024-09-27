import clsx from "clsx";
import s from "./leaves-background-animation.module.css";

export const BgLeave = () => {
  return (
    <div className={s.background_container}>
      <div className={s.background_animate}>
        <div className={clsx(s.falling_leaves, s.leaf1, s.size1)}></div>
        <div className={clsx(s.falling_leaves, s.leaf2, s.size2)}></div>
        <div className={clsx(s.falling_leaves, s.leaf3, s.size3)}></div>

        <div className={clsx(s.falling_leaves, s.leaf4, s.size4)}></div>
        <div className={clsx(s.falling_leaves, s.leaf5, s.size5)}></div>
        <div className={clsx(s.falling_leaves, s.leaf6, s.size6)}></div>

        <div className={clsx(s.falling_leaves, s.leaf7, s.size4)}></div>
        <div className={clsx(s.falling_leaves, s.leaf8, s.size7)}></div>
        <div className={clsx(s.falling_leaves, s.leaf9, s.size8)}></div>
      </div>
    </div>
  );
};
