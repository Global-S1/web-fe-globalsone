import Image from "next/image";
import BgTestimonial from "@/assets/background/bg-testimonial.png";
import { Stars } from "./Stars";
import { MosaicImg } from "./MosaicImg";
import { FC } from "react";

interface ITestimonial {
  name: string;
  stars: number;
  content: string;
  clientImg: any;
  pictures: any[];
}

export const TestimonialCard: FC<ITestimonial> = ({
  name,
  stars,
  content,
  clientImg,
  pictures,
}) => {
  return (
    <div
      className="relative flex items-center bg-cover w-full rounded-[40px] h-[313px] sm:h-[400px] md:h-[500px] lg:h-[613.71px] overflow-hidden px-[20rem] sm:px-[30rem] md:px-[40rem] lg:px[50rem] pt-[20rem]"
      style={{ backgroundImage: `url(${BgTestimonial.src})` }}
    >
      <div className="pl-9 xl:pl-16 w-1/2 flex flex-col">
        <h2 className="text-large sm:text-title-9 md:text-title-7 lg:text-title-5 xl:text-title-2 leading-[25.75px] sm:leading-[39.2px] md:leading-[53px] lg:leading-[62px] xl:leading-[89.76px]">
          {name}
        </h2>

        <Stars numStars={stars} />

        <button className="bg-custom-gradian-btn-project w-[117.03px] h-[22.84px] xl:w-[191px] xl:h-[44.8px] rounded-[6rem] mt-4 font-futura text-[13px] xl:text-[21px] mb-[10rem] sm:order-last md:mt-[15rem]">
          Ver Porjecto
        </button>

        <p className="text-nano sm:text-micro md:text-tiny lg:text-base xl:text-medium leading-[15px] sm:leading-[18px] md:leading-[22px] lg:leading-[28px] xl:leading-[33px] max-w-[470px] font-futura">
          {content}
        </p>
      </div>

      <Image
        src={clientImg}
        alt="Testimonio de nuestro cliente"
        className="absolute object-contain object-bottom xl:object-contain h-full w-[90%] xl:w-[60%] xl:-bottom-0 right-1 xl:left-[50%] xl:transform xl:-translate-x-[50%]"
      />

      <div className="w-[50%] h-full flex justify-end items-start">
        <MosaicImg pictures={pictures} />
      </div>
    </div>
  );
};
