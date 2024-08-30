import { FC, ReactNode } from "react";
import "./WindowCard";
import clsx from "clsx";

interface Prop {
  children: ReactNode;
  size?: "complete" | "semiFull" | "fit";
  border?: "complete" | "left" | "right";
  active?: boolean;
}
const sizeValues = {
  complete: "w-full",
  semiFull: "w-4/5",
  fit: "w-3/5",
};

const borderOrientation = {
  complete: "rounded-[18px] xl:rounded-[40px]  border-t-2",
  left: "rounded-tr-[18px] rounded-b-[18px] xl:rounded-tr-[40px] xl:rounded-b-[40px]  border-t-2",
  right:
    "rounded-tl-[18px] rounded-b-[18px] xl:rounded-tl-[40px] xl:rounded-b-[40px]  border-t-2",
};

const colors = {
  active: "#7F87B7",
  inactive: "#0E1330",
};

const WindowCard: FC<Prop> = ({
  children,
  size,
  border = "complete",
  active,
}) => {
  const roundedType = borderOrientation[border];
  const dotColor = active ? colors.active : colors.inactive;
  const dotCount = new Array(3).fill(null);
  const sizeWidth = sizeValues[size || "complete"];

  return (
    <div
      className={clsx(
        "relative px-[16px] h-[421px] w-full bg-custom-gradient-window-card rounded-t-[7px] "
      )}
    >
      <div className="flex  h-[32.69px] xl:h-[122px] bg-[#2C2D77] rounded-t-[7px] xl:rounded-t-[40px] px-[8.53px] xl:px-[24px] pt-[6.89px] xl:pt-[25.5px]">
        <div className="h-[10px] flex justify-start items-center space-x-1 xl:space-x-[7px]">
          {dotCount.map((_, index) => (
            <div
              key={index}
              className="w-[3.8px] h-[3.8px] xl:h-[15px] xl:w-[15px] rounded-full "
              style={{ backgroundColor: dotColor }}
            ></div>
          ))}
        </div>
      </div>

      <div
        className={`${roundedType} pt-[6.89px] border-t-slate-400 bg-gradient-purple -mt-[10px] xl:-mt-[60.35px]`}
      >
       <div className="absolute z-40">  {children}</div> 
        <div className="absolute w-[91.5%] xl:w-[97.5%] h-[90%] bg-[#6b63d6]  opacity-40 top-14 z- rounded-[14px] xl:rounded-[40px] border" />
      </div>
    </div>
  );
};

export default WindowCard;
