import { FC, ReactNode } from "react";
import "./WindowCard";
import clsx from "clsx";
import { Subtract } from "./Subtract";

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
        "w-full px-[16px] bg-custom-gradient-window-card rounded-t-[7px] "
      )}
    >
      <div className="relative">
        <div className="absolute w-full z-10">
          <div className="relative ">
            <Subtract />
            <div className="absolute top-[26%] left-[1.7%]  flex justify-start items-center space-x-[2px] xl:space-x-[7px]">
              {dotCount.map((_, index) => (
                <div
                  key={index}
                  className="w-[3.8px] h-[3.8px] xl:h-[15px] xl:w-[15px] rounded-full "
                  style={{ backgroundColor: dotColor }}
                ></div>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-[#6b63d689]  rounded-[14px] xl:rounded-[40px] ">
          {children}
        </div>
      </div>
    </div>
  );
};

export default WindowCard;

{
  /* <div className="relative w-full border border-red-400">
<div className="border ">
  <Subtract />
</div>
<div className="absolute top-[26%] left-[1.7%]  flex justify-start items-center space-x-[2px] xl:space-x-[7px]">
  {dotCount.map((_, index) => (
    <div
      key={index}
      className="w-[3.8px] h-[3.8px] xl:h-[15px] xl:w-[15px] rounded-full "
      style={{ backgroundColor: dotColor }}
    ></div>
  ))}
</div>
</div>

<div>
{/* <div className=""> {children}</div> */
}
{
  /* <div className=" top-0 w-[90%] mx-auto xl:w-[97.5%] h-[200px] bg-[#6b63d6]  opacity-40 rounded-[14px] xl:rounded-[40px] -mt-[11px]" /> */
}
