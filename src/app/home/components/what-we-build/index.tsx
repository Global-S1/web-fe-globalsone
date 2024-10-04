import Image from "next/image";
import Foco from "@/assets/home/what-we-build/pictures/foco.png";
import { Section } from "@/shared/components/section";
import { WhatWeBuildCardContainer } from "./we-build-card-container";
import { LeaveHd } from "@/assets/leavesComponents/LeaveHd";
import s from "./what-we-build.module.css";
import { IWhathWeBuildContent } from "../../interfaces/content.interface";

interface Props {
  content: IWhathWeBuildContent;
}

export const WhatWeBuild = ({ content }: Props) => {
  const { title, services } = content;
  return (
    <Section extendStyle={s.whatWeBuild__section}>
      <div className={s.purple__circle}></div>
      <div className={s.whatWeBuild__title__container}>
        <Image src={Foco} alt="nosotros lo desarrollamos" className={s.foco} />
        <h2>{title}</h2>
      </div>
      <div className={s.picture_container}>
        <div className={s.leave}>
          <LeaveHd />
        </div>
        <WhatWeBuildCardContainer services={services} />
        <div className={s.green_circle}></div>
      </div>
    </Section>
  );
};
