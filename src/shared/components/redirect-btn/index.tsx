import clsx from "clsx";
import Link from "next/link";
import React, { Children, FC } from "react";
import s from "./redirect-btn.module.css";

interface IProps {
  route: string;
  text: string;
  extendStyle?: string;
  children?: React.ReactNode;
}

export const RedirectBtn: FC<IProps> = ({
  route = "",
  text,
  extendStyle,
  children,
}) => {
  return (
    <Link href={route} className={clsx(s.btn__styles, extendStyle)}>
      {children} {text}
    </Link>
  );
};
