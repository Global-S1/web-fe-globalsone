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
      <div className="w-full relative h-[500px] md:h-[700px] lg:h-[800px] flex flex-col justify-end mb-[64px] text-large xl:text-title-3 leading-[25.75px] xl:leading-[71.07px]">
        <div className="absolute left-[20px] top-12 sm:top-24 md:top-[22%] lg:top-[31%] xl:top-[15rem] -translate-y-1/2">
          <div className="relative">
            <Image
              src={BgTextleft}
              alt="background"
              className="hidden md:block absolute h-[30rem] md:h-[20rem] md:w-[25rem] xl:w-[50rem] max-w-none md:-top-[80%] xl:-top-[62%]  md:-left-[35%] xl:-left-[50%] -z-10 "
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
          className="absolute top-0 max-w-[322px] h-[375px] left-[46.5%]  -translate-x-1/2  md:hidden"
        />
        <div className="hidden md:block">
          {/* <CentralImg /> */}
        </div>
        <div className="absolute right-[18px] bottom-[3.5%] md:bottom-28 lg:bottom-16 xl:bottom-5 text-right -translate-y-1/2 x]">
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
        <div className="flex flex-col items-center mt-24 font-futura text-tiny">
          <p>Ver más</p>
          <p className="mt-2">
            <DonwRow />
          </p>
        </div>
      </div>

      <WindowCard active>
        <div className=" flex flex-col justify-start items-center relative  py-10 pt-14 sm:pt-20 lg:pt-28 px-10">
          <div className="hidden md:block">
            <Leave
              style={{
                position: "absolute",
                top: "-23%",
                right: "-3%",
              }}
            />
          </div>
          <div className=" flex justify-center items-center mb-10">
            <h2 className="text-large xl:text-title-7 text-center leading-[25.75px] xl:leading-[51.66px]">
              TRABAJA CON PROFESIONALES <br />Y VE COMO TUS IDEAS SE DIGITALIZAN
            </h2>
          </div>

          <Insides h="20px" />
        </div>
      </WindowCard>
    </Section>
  );
};

export default Hero;
