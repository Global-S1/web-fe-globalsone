import { FC, ReactNode } from "react";
import { WindowHead } from "./window-head";
import s from "./window.module.css";

interface Prop {
  children: ReactNode;
  active?: boolean;
}

export const WindowCard: FC<Prop> = ({ children }) => {
  return (
    <div className={s.windowCard_container}>
      <div className="relative">
        <WindowHead active />
        {children}
      </div>
    </div>
  );
};
