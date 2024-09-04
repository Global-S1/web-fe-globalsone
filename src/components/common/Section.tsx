import clsx from "clsx";
import { FC } from "react";

interface Prop {
  children: React.ReactNode;
  styles?: string;
}

const Section: FC<Prop> = ({ children, styles }) => {
  const basicStyle =
    "container relative flex flex-col mx-auto justify-center items-center  max-w-[1240px] px-[16px] xl:px-0";
  return <section className={clsx(basicStyle, styles)}>{children}</section>;
};

export default Section;
