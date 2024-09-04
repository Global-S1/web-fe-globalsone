import Image from "next/image";
import clsx from "clsx";
import { FC } from "react";
import { IFeatures } from "@/interfaces/IFeatures";

export const FeatureItem: FC<IFeatures> = ({
  title,
  content,
  img,
  direction,
  bg,
}) => {
  const directionStyles = {
    left: {
      flow: "flex-row",
      img: "-right-12 sm:-right-20 md:-right-32 xl:-right-38 top-10 xl:-top-20",
    },
    right: {
      flow: "flex-row-reverse text-right",
      img: "-left-10 sm:-left-20 md:-left-32 xl:-left-34 top-10 xl:-top-10",
    },
  };

  const currentStyleDirection = directionStyles[direction].flow;
  const currentStyleImg = directionStyles[direction].img;
  const SBaseContainer =
    "relative flex justify-between w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]";
  const SBaseTitle =
    "text-tiny sm:text-base md:text-big lg:text-title-9 xl:text-title-7 leading-[19.84px] sm:leading-[27px] md:leading-[35px] lg:leading-[43px] xl:leading-none mb-3 xl:mb-6";
  const SBaseContent =
    "text-micro sm:text-petite md:text-small lg:text-base xl:text-medium leading-[18px] sm:leading-[22px] md:leading-[26px] lg:leading-[30px] xl:leading-[33px] font-futura";

  return (
    <div className={clsx(SBaseContainer, currentStyleDirection)}>
      <div className="w-[60%] md:w-[45%] lg:w-[50%] xl:w-[64%]">
        <h3 className={clsx(SBaseTitle)}>{title}</h3>
        <p className={clsx(SBaseContent)}>{content}</p>
      </div>
      <Image
        src={img || '/default-image.png'}
        alt="trabajando en equipo"
        className={clsx(
          "absolute",
          currentStyleImg,
          "w-[180px] sm:w-[350px] md:w-[500px] lg:w-[550px]"
        )}
      />
    </div>
  );
};
