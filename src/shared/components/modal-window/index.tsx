import { FC, ReactNode } from "react";
import { WindowHead } from "./window-head";
import s from "./modal-window.module.css";

interface Props {
  children: ReactNode;
  active?: boolean;
  color?: string;
  showGradient?: boolean;
}

export const ModalWindow: FC<Props> = ({ children, color, showGradient }) => {
  return (
    <div className={s.windowCard__container}>
      <div className="relative">
        <WindowHead active color={color} showGradient={showGradient}/>
        {children}
      </div>
    </div>
  );
};
  