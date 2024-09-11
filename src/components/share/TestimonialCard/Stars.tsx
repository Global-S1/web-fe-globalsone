import Star from "@/assets/icons/Star";
import { FC } from "react";

interface Prop {
  numStars: number;
}

export const Stars: FC<Prop> = ({ numStars }) => {
  const starsArray = Array(numStars).fill(0);

  return (
    <div className="flex space-x-1 sm:space-x-2 md:space-x-3 lg:space-x-4 xl:space-x-5 mt-2 xl:mt-3 mb-1 sm:mb-4 xl:mb-10">
      {starsArray.map((_, index) => (
        <div key={index} className="w-[11.33px] sm:w-[15px] md:w-[25px] lg:w-[32px] xl:w-[40px]">
          <Star />
        </div>
      ))}
    </div>
  );
};
