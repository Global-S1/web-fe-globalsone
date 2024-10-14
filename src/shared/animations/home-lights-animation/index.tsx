import clsx from "clsx";
import s from "./home-lights.module.css";

const DinamicRectangle = () => {
  return (
    <svg
      className={s.light__line__magenta__svg}
      width="5"
      height="100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop
            offset="0%"
            style={{ stopColor: "rgba(255, 0, 199, 1)", stopOpacity: 1 }}
          />
          <stop
            offset="80%"
            style={{ stopColor: "rgba(255, 0, 200, 0.35)", stopOpacity: 1 }}
          />{" "}
          <stop
            offset="100%"
            style={{ stopColor: "rgba(255, 0, 199, 0)", stopOpacity: 1 }}
          />
        </linearGradient>
      </defs>
      <polygon points="0,0 5,0 3,50 2,70" fill="url(#grad1)" />
    </svg>
  );
};

const InvertDinamicRectangle = () => {
  return (
    <svg
      className={s.light__line__skyblue__svg}
      width="5"
      height="100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="-0.5"
          y1="0"
          x2="-0.5"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0094FF" stopOpacity="0" />
          <stop offset="1" stopColor="#0094FF" />
        </linearGradient>
      </defs>
      <polygon points="2.5,0 0,100 5,100" fill="url(#paint0_linear)" />
    </svg>
  );
};

export const HomeLights = () => {
  return (
    <div className={s.light__container}>
      <div>
        <div className={s.light__line__magenta}></div>
        <div className={clsx(s.lines__white, s.line__left)}></div>
        <DinamicRectangle />
        <InvertDinamicRectangle />
        <div className={clsx(s.lines__white, s.line__right)}></div>
        <div className={s.light__line__blue}></div>
      </div>
    </div>
  );
};
