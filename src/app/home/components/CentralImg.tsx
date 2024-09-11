import Base from "@/assets/centralImg/base.png";
import Difuminado from "@/assets/centralImg/difuminado.png";
import Hojas from "@/assets/centralImg/hojas.png";
import Maquina from "@/assets/centralImg/maquina.png";
import Placa from "@/assets/centralImg/placa.png";
import Rayo from "@/assets/centralImg/rayo.png";
import Sistema from "@/assets/centralImg/sistema.png";
import Image from "next/image";

export const CentralImg = () => {
  return (
    <div className="relative">
      <Image src={Difuminado} alt="GlobalS1" className="absolute" />
      <Image src={Base} alt="GlobalS1" className="absolute" />
      <Image src={Hojas} alt="GlobalS1" className="absolute" />
      <Image src={Placa} alt="GlobalS1" className="absolute" />
      <Image src={Maquina} alt="GlobalS1" className="absolute" />
      <Image src={Rayo} alt="GlobalS1" className="absolute z-10" />
      <Image src={Sistema} alt="GlobalS1" className="absolute" />
    </div>
  );
};
