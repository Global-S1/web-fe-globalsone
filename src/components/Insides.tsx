import { FC } from "react";

interface Prop {
  h: string;
  fontSizeNumber?: string;
  fontSizeTitle?: string;
}

const Insides: FC<Prop> = ({ h, fontSizeNumber, fontSizeTitle }) => {
  return (
    <div
      className="bg-hero-insides grid grid-cols-3  rounded-3xl text-center"
      style={{ height: h }}
    >
      <div className="flex flex-col justify-center items-center">
        <div
          className="text-inside-green w-full text-center leading-8 border-r border-r-white"
          style={{ fontSize: fontSizeNumber }}
        >
          +20
        </div>
        <div
          className="w-full font-futura  border-r border-r-white"
          style={{ fontSize: fontSizeTitle }}
        >
          Clientes
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div
          className="text-inside-purple w-full text-center leading-8"
          style={{ fontSize: fontSizeNumber }}
        >
          +30
        </div>
        <div
          className="w-full font-futura "
          style={{ fontSize: fontSizeTitle }}
        >
          Proyectos
        </div>
      </div>
      <div className=" flex flex-col justify-center items-center">
        <div
          className="text-inside-green w-full text-center leading-8 border-l border-white"
          style={{ fontSize: fontSizeNumber }}
        >
          +6
        </div>
        <div
          className="w-full font-futura  border-l border-white"
          style={{ fontSize: fontSizeTitle }}
        >
          Años de experiencia
        </div>
      </div>
    </div>
  );
};

export default Insides;
