import Image from "next/image";
import Foco from "@/assets/icons/foco.png";
import { Section } from "@/components/share/section";
import { CardContainer } from "./we-build-card-container";
import s from "./what-we-build.module.css";
import { Leave } from "@/assets/leavesComponents/Leave";

export const WhatWeBuild = () => {
  return (
    <Section>
      <div className={s.whatWeBuild_container}>
        <div className={s.purple_circle}></div>
        <Image src={Foco} alt="nosotros lo desarrollamos" className={s.foco} />
        <div className={s.whatWeBuild_title}>
          <h2>
            ¿Tienes una idea? <br />
            NOSOTROS LO DESARROLLAMOS <br />
            POR TÍ
          </h2>
        </div>
        <div className={s.picture_container}>
          <div className={s.leave}>
            <Leave style={{}} />
          </div>
          <CardContainer />
          <div className={s.green_circle}></div>
        </div>
      </div>
    </Section>
  );
};
