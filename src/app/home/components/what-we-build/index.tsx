import Image from "next/image";
import Foco from "@/assets/home/what-we-build/pictures/foco.png";
import { Section } from "@/shared/components/section";
import { CardContainer } from "./we-build-card-container";
import { LeaveHd } from "@/assets/leavesComponents/LeaveHd";
import s from "./what-we-build.module.css";

export const WhatWeBuild = ({ whatWeBildData }) => {
  const { title } = whatWeBildData;
  return (
    <Section>
      <div className={s.whatWeBuild_container}>
        <div className={s.purple_circle}></div>
        <Image src={Foco} alt="nosotros lo desarrollamos" className={s.foco} />
        <div className={s.whatWeBuild_title}>
          <h2>{title}</h2>
        </div>
        <div className={s.picture_container}>
          <div className={s.leave}>
            <LeaveHd />
          </div>
          <CardContainer />
          <div className={s.green_circle}></div>
        </div>
      </div>
    </Section>
  );
};
