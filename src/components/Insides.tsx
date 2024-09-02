import { FC } from "react";
import clsx from "clsx";

interface Prop {
  h?: string;
  fontSizeNumber?: string;
  fontSizeTitle?: string;
}

const Insides: FC<Prop> = ({ h, fontSizeNumber, fontSizeTitle }) => {
  return (
    <div
      className="bg-hero-insides w-full max-w-[940px] grid grid-cols-2 gap-4 md:grid-cols-3 rounded-3xl text-center px-[34px] pt-[25px] pb-[31px]"
    >
      <div className="flex flex-col justify-center items-center">
        <div
          className="text-inside-green  w-full text-center leading-8 border-r border-r-white"
        >
          +20
        </div>
        <div
          className="w-full font-futura  border-r border-r-white"
        >
          Clientes
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div
          className="text-inside-purple w-full text-center leading-8"
        >
          +30
        </div>
        <div
          className="w-full font-futura "
        >
          Proyectos
        </div>
      </div>
      <div className="col-span-2 md:col-span-1 flex flex-col justify-center items-center border-t md:border-t-0 md:border-l-2">
        <div
          className="text-inside-green w-full text-center leading-8 "
        >
          +6
        </div>
        <div
          className="w-full font-futura  "
        >
          Años de experiencia
        </div>
      </div>
    </div>
  );
};

export default Insides;
