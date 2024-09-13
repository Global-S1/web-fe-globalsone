import Image from "next/image";
import Foco from "@/assets/icons/foco.png";
import { Section } from "@/components/share/section";
import { CardContainer } from "./we-build-card-container";
import s from "./what-we-build.module.css";

export const WhatWeBuild = () => {
  return (
    <Section>
      <div className={s.whatWeBuild_container}>
        <Image src={Foco} alt="nosotros lo desarrollamos" className={s.foco} />
        <div className={s.whatWeBuild_title}>
          <h2>
            ¿Tienes una idea? <br />
            NOSOTROS LO DESARROLLAMOS <br />
            POR TÍ
          </h2>
        </div>
        <CardContainer />
      </div>
    </Section>
  );
};
