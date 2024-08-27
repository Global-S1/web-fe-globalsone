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
import logoHero from "@/assets/heroImg.png";

const Hero = () => {
  return (
    <Section styles={{ marginBotton: "5rem" }}>
      <div className="h-[100vh] w-full relative md:h-[700px] lg:h-[800px]">
        <div className="absolute left-4 top-11 sm:top-24 md:top-[22%] lg:top-[31%] xl:top-[15rem] -translate-y-1/2 text-[1.5rem] sm:text-[2.5rem] md:text-[2.5rem] lg:text-[3.3rem] xl:text-[4rem] xl:leading-none lg:leading-tight md:leading-[2.9rem]">
          <div className="relative">
            <Image
              src={BgTextleft}
              alt="background"
              className="hidden md:block  absolute h-[30rem] md:h-[20rem] md:w-[25rem] xl:w-[50rem] max-w-none md:-top-[80%] xl:-top-[62%]  md:-left-[35%] xl:-left-[50%] -z-10 "
            />
            <h2>
              Impulsa tu <br /> negocio <br />
              con
            </h2>
          </div>
        </div>
        <Image
          src={logoHero}
          alt="Global S1"
          className="max-w-[320px] mx-auto md:hidden"
        />
        <div className="hidden md:block">
          <CentralImg />
        </div>
        <div className="absolute right-4 sm:bottom-5 md:bottom-28 lg:bottom-16 xl:bottom-5 text-right -translate-y-1/2 text-[1.5rem] md:text-[2.5rem] lg:text-[3.3rem] xl:text-[4rem] xl:leading-none lg:leading-tight md:leading-[2.9rem]">
          <div>
            <Image
              src={BgTextright}
              alt="background title"
              className="absolute -z-10 -right-28 -bottom-20"
            />
            <h2>
              soluciones <br />
              de software <br /> a medida
            </h2>
          </div>
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
            <Insides h="8rem" fontSizeNumber="1.5rem" fontSizeTitle="1.25" />
          </div>
        </div>
      </WindowCard>
    </Section>
  );
};

export default Hero;
