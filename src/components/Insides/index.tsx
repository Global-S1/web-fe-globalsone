import { FC } from "react";
import { InsideData } from "@/moc/insides.moc";
import { StatBlock } from "./StatBlock";

interface Prop {
  h?: string;
  fontSizeNumber?: string;
  fontSizeTitle?: string;
}

const Insides: FC<Prop> = ({ h, fontSizeNumber, fontSizeTitle }) => {
  return (
    <div className="bg-hero-insides w-full max-w-[940px] grid grid-cols-2 gap-y-4 xl:gap-4 md:grid-cols-3 rounded-3xl text-center px-[34px] pt-[25px] pb-[31px]">
      {InsideData.slice(0, 2).map((stat, index) => (
        <StatBlock
          key={index}
          number={stat.number}
          label={stat.label}
          color={stat.color}
          hasBorder={index === 0}
        />
      ))}
      <div className="col-span-2 md:col-span-1 flex flex-col justify-center items-center border-t md:border-t-0 md:border-l-2 pt-3 sm:pt-0">
        <StatBlock
          number={InsideData[2].number}
          label={InsideData[2].label}
          color={InsideData[2].color}
        />
      </div>
    </div>
  );
};

export default Insides;
