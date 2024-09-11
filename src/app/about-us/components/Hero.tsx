import { Facebook } from "@/assets/icons/aboutUs/Facebook";
import { Instagram } from "@/assets/icons/aboutUs/Instagram";
import { Linkedin } from "@/assets/icons/aboutUs/Linkedin";
import { Man } from "@/assets/images/aboutUs/Man";
import { Woman } from "@/assets/images/aboutUs/Woman";
import { Section } from "@/components/share/section";
import Insides from "@/components/Insides";
import { FC, ReactNode } from "react";

interface Prop{
  children: ReactNode
}

const Card:FC<Prop> = ({ children }) => {
  return (
    <div
      className="border border-[rgba(255,255,255,0.5)] h-[36rem] w-[22.5rem] rounded-2xl flex flex-col justify-between items-center px-5 py-6 relative"
      style={{
        background:
          "linear-gradient(180deg, rgba(14,6,43, 1) 7%, rgba(101,42,198,1) 100%)",
      }}
    >
      <div className="flex w-full space-x-1">
        <div className="w-2 h-2 bg-slate-50 rounded-full"></div>
        <div className="w-2 h-2 bg-slate-50 rounded-full"></div>
        <div className="w-2 h-2 bg-slate-50 rounded-full"></div>
      </div>
      {children}
    </div>
  );
};

const Hero = () => {
  return (
    <Section styles={{ marginTop: "4rem", height: "56rem" }}>
      <div className="absolute w-[65rem] h-[50rem] -top-10 -right-56 -z-10 rounded-[69.9895rem] bg-[#5a2eea5e] blur-[200px]"></div>
      <div className="flex mt-4 w-full h-full">
        <div className="w-[50%] h-full pr-8 flex flex-col justify-center">
          <h2 className="text-[4.5rem] leading-relaxed ">
            Your journey to finding the perfect
          </h2>
          <p className="mr-[13%] mb-16 mt-3 font-futura text-xl">
            Your journey to finding the perfect property begins here. Explore
            our listings to find the home that matches your dreams.
          </p>
          <Insides h={"5.5rem"} />
          <div className="text-center mt-20">
            <p className="mb-3">Conoce más de Nosotros:</p>
            <div className="flex justify-center space-x-3">
              <Facebook />
              <Linkedin />
              <Instagram />
            </div>
          </div>
        </div>
        <div className="w-[50%] h-[46.5rem] relative flex justify-center rounded-bl-[2.5rem]">
          <div
            className="absolute h-full w-[110%] left-0 -top-1"
            style={{
              background:
                "linear-gradient(180deg, rgba(217, 217, 217, 0.17) 0%, rgba(115, 115, 115, 0.00) 100%)",
            }}
          ></div>
          <div className="absolute transform -rotate-12 top-[11%] right-[25%]">
            <Card>
              <div className=" absolute -top-5">
                <Man />
              </div>
            </Card>
          </div>
          <div className="absolute top-[9%] right-0">
            <Card>
              <div className="absolute">
                <Woman />
              </div>
              <div className="text-center mb-5">
                <h3 className="mb-2 text-[1.6rem]">GLOBALS1</h3>
                <button className="font-futura text-lg bg-[#d9d9d979] px-6 py-1 rounded-lg">
                  Ver más de nosotros
                </button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
