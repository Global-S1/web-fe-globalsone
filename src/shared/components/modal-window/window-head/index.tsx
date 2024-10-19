import { FC } from "react";
import { WindowBar } from "./WindowBar";
import s from "./window-head.module.css";
import clsx from "clsx";

interface Prop {
  active?: boolean;
  color?: string;
  showGradient?: boolean;
}

export const WindowHead: FC<Prop> = ({ active, color, showGradient }) => {
  const controls = new Array(3).fill(null);
  return (
    <div className={s.windowHead_container}>
      <div>
        <WindowBar color={color} showGradient={showGradient}/>
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
