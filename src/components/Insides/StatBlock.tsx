import { FC } from "react";
import { IInsidesData } from "@/interfaces/IInsidesData";
import clsx from "clsx";

export const StatBlock: FC<IInsidesData> = ({ number, label, color, hasBorder }) => {
  return (
    <div className={clsx("flex flex-col justify-center items-center", hasBorder ? "border-r border-white" : "")}>
      <div
        className={clsx(
          color,
          "w-full text-large xl:text-big text-center leading-8"
        )}
      >
        {number}
      </div>
      <div className="w-full text-[15px] xl:text-base font-futura">{label}</div>
    </div>
  );
};
