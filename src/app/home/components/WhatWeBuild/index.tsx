import Image from "next/image";
import Foco from "@/assets/icons/foco.png";
import WindowCard from "@/components/WindowCard";
import { LeaveClear } from "@/assets/leavesComponents/LeaveClear";
import Section from "@/components/common/Section";
import { ourService } from "@/moc/service.moc";
import CardService from "./CardService";

const WhatWeBuild = () => {
  return (
    <Section styles="mb-[54px] xl:mb-[230px]">
      <Image src={Foco} alt="nosotros lo desarrollamos" className="w-28" />
      <h2 className="xl:w-[200%] text-center text-large md:text-title-9 lg:text-title-7 xl:text-title-6 leading-tight mb-10">
        ¿Tienes una idea? <br />
        NOSOTROS LO DESARROLLAMOS <br />
        POR TÍ
      </h2>
      <WindowCard active>
        <div className="relative w-full grid grid-cols-12 xl:gap-x-7 gap-y-4 xl:gap-y-8 pt-8 xl:pt-28 px-3 xl:px-5 pb-4 xl:pb-10 ">
          {ourService.map((item, index) => {
            const isLast =
              index === ourService.length - 1 && ourService.length % 2 !== 0;
            return <CardService key={index} {...item} isLast={isLast} />;
          })}
        </div>
      </WindowCard>
    </Section>
  );
};

export default WhatWeBuild;
