import { FC, ReactNode } from "react";
import { WindowHead } from "./window-head";
import s from "./modal-window.module.css";

interface Prop {
  children: ReactNode;
  active?: boolean;
}

export const ModalWindow: FC<Prop> = ({ children }) => {
  return (
    <div className={s.windowCard_container}>
      <div className="relative">
        <WindowHead active />
        {children}
      </div>
    </div>
  );
};
