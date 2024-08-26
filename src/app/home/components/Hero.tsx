import Image from "next/image";
import DonwRow from "@/assets/icons/DonwRow";
import WindowCard from "@/components//WindowCard";
import BgTextleft from "@/assets/background/bg-title-hero-left.png";
import BgTextright from "@/assets/background/bg-title-hero-right.png";
import BgHero from "@/assets/bgHero.png";
import { CentralImg } from "./CentralImg";
import { Leave } from "@/assets/leavesComponents/Leave";
import Section from "@/components/common/Section";
import Insides from "@/components/Insides";

const Hero = () => {
  return (
    <Section styles={{ marginBotton: "5rem" }}>
      <div
        className="w-full flex flex-col justify-start items-center mb-14 relative bg-contain bg-no-repeat bg-center "
        style={{ backgroundImage: `url(${BgHero.src})` }}
      >
        <Image
          src={BgTextleft}
          alt="background"
          className="absolute -z-10 -left-36 top-12"
        />
        <h2 className="text-hero-title leading-[68px] absolute left-0 top-[37%] -translate-y-1/2">
          Impulsa tu <br /> negocio <br />
          con
        </h2>
        <div className="h-[600px] w-full">
          <CentralImg />
          {/* <Image
            src={HeroImg}
            alt="Global S1"
            width={570}
            className="ml-[23.5%]"
          /> */}
        </div>
        <h2 className="text-hero-title absolute leading-[68px] -bottom-10 -translate-y-1/2 right-0 text-right">
          soluciones <br />
          de software <br /> a medida
        </h2>
        <Image
          src={BgTextright}
          alt="background title"
          className="absolute -z-10 -right-28 -bottom-20"
        />
        <div className="flex flex-col items-center mt-24 font-futura text-2xl">
          <p>Ver más</p>
          <p className="mt-2">
            <DonwRow />
          </p>
        </div>
      </div>
      <WindowCard>
        <div className="h-[500px] flex flex-col justify-center items-center relative">
          <Leave
            style={{
              position: "absolute",
              top: "-9%",
              right: "-5%",
            }}
          />
          <div>
            <h2 className="text-hero-subtitle text-center mb-10 leading-tight">
              TRABAJA CON PROFESIONALES <br />Y VE COMO TUS IDEAS SE DIGITALIZAN
            </h2>
            <Insides h="8rem" fontSizeNumber="1.5rem" fontSizeTitle="1.25"/>
          </div>
        </div>
      </WindowCard>
    </Section>
  );
};

export default Hero;
