import { FC, ReactNode } from "react";
import "./WindowCard";

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
  complete: "rounded-t-[40px]  border-t-2",
  left: "rounded-tr-[40px]  border-t-2",
  right: "rounded-tl-[40px]  border-t-2",
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
      className={`h-auto bg-custom-gradient-window-card rounded-t-[40px] ${sizeWidth}`}
    >
      <div className="bg-[#282D45] h-[90px] rounded-t-[40px] pt-7">
        <div className="flex space-x-2 ml-6">
          {dotCount.map((_, index) => (
            <div
              key={index}
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: dotColor }}
            ></div>
          ))}
        </div>
      </div>
      <div
        className={`${roundedType} border-t-slate-400 -mt-6`}
        style={{
          background:
            "linear-gradient(180deg, rgba(14,3,42,1) 0%, rgba(14,3,42,1) 4%, rgba(14,3,42,0) 100%)",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default WindowCard;
