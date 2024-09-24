import { FC } from "react";
import { WindowBar } from "./WindowBar";
import s from "./window-head.module.css";
import clsx from "clsx";

interface Prop {
  active?: boolean;
}

export const WindowHead: FC<Prop> = ({ active }) => {
  const controls = new Array(3).fill(null);
  return (
    <div className={s.windowHead_container}>
      <div>
        <WindowBar />
        <div className={s.controls}>
          {controls.map((_, index) => (
            <div
              key={index}
              className={clsx(active ? s.active : s.disable)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};
