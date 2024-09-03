import { FC, ReactNode } from "react";
import { HeaderWindowCard } from "./HeaderWindow";

interface Prop {
  children: ReactNode;
  active?: boolean;
}

const WindowCard: FC<Prop> = ({ children }) => {
  return (
    <div className="w-full xl:px-0 bg-custom-gradient-window-card rounded-t-[7px] ">
      <div className="relative">
        <HeaderWindowCard active />
        <div className="bg-[#6b63d689]  rounded-[14px] sm:rounded-[20px] md:rounded-[30px] lg:rounded-[40px] ">
          {children}
        </div>
      </div>
    </div>
  );
};

export default WindowCard;
