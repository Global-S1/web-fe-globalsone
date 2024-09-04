import WindowCard from "@/components//WindowCard";
import { Leave } from "@/assets/leavesComponents/Leave";
import Section from "@/components/common/Section";
import Insides from "@/components/Insides";
import { HeroTitle } from "./HeroTitle";
import { titles } from "@/moc/heroTitles.moc";
import { HeroArrow } from "./HeroArrow";
import Image from "next/image";
import heroImg from "@/assets/heroImg.png";

const Hero = () => {
  return (
    <Section styles="mb-[67px] xl:mb-[169px]">
      <div className="w-full relative h-[500px] md:h-[700px] lg:h-[800px] flex flex-col justify-end mb-[64px]">
        <HeroTitle {...titles[0]} />
        <></>
        <Image
          src={heroImg}
          alt="Global S1"
          className="absolute -top-3 left-[46%] transform -translate-x-1/2 w-[335px] xl:w-[550px]"
        />
        <HeroTitle {...titles[1]} />
        <HeroArrow />
      </div>
      <WindowCard active>
        <div className=" flex flex-col justify-start items-center relative  py-10 pt-14 sm:pt-20 lg:pt-28 px-10">
          <div className="hidden md:block">
            <Leave
              style={{
                position: "absolute",
                top: "0",
                right: "-3%",
                zIndex: 12,
              }}
            />
          </div>
          <div className=" flex justify-center items-center mb-10">
            <h2 className="text-large xl:text-title-8 text-center leading-[25.75px] xl:leading-[51.66px]">
              TRABAJA CON PROFESIONALES <br />Y VE COMO TUS IDEAS SE DIGITALIZAN
            </h2>
          </div>
          <Insides />
        </div>
      </WindowCard>
    </Section>
  );
};

export default Hero;
