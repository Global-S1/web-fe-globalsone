import Image, { StaticImageData } from "next/image";
import { FC } from "react";
import clsx from "clsx";
import { ITitleData } from "@/interfaces/ITitleData";

export const HeroTitle: FC<ITitleData> = ({ title, bg, direction }) => {
  const directionStyle = {
    left: {
      container:
        " xl:left-0 top-12 sm:top-24 md:top-[22%] lg:top-[31%] xl:top-52",
      bg: "hidden md:block absolute h-[30rem] md:h-[20rem] md:w-[25rem] xl:w-[50rem] max-w-none md:-top-[80%] xl:-top-[62%] md:-left-[35%] xl:-left-[50%] -z-10 ",
    },
    right: {
      container:
        "right-0 xl:right-0 bottom-[3.5%] md:bottom-28 lg:bottom-16 xl:bottom-5 text-right",
      bg: "absolute -z-10 -right-28 -bottom-20",
    },
  };
  const baseContainerStyle =
    "absolute -translate-y-1/2 text-large sm:text-title-8 md:text-title-6 lg:text-title-5 xl:text-title-3 leading-[25.75px] sm:leading-[39.5px] md:leading-[53px] lg:leading-[67.4px] xl:leading-[71.07px]";
  const currentDirectionStyles =
    directionStyle[direction as "left" | "right"].container;

  return (
    <div className={clsx(baseContainerStyle, currentDirectionStyles)}>
      <div className="relative">
        {/* <Image
            src={bg}
            alt="background"
            className={clsx(directionBg)}
          /> */}
        <h2 className="whitespace-pre-line">{title}</h2>
      </div>
    </div>
  );
};
