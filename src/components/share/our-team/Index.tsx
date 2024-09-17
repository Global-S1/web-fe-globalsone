import Image from "next/image";
import { CarrucelImg } from "@/components/share/carrucel-image-two";
import { Leave } from "@/assets/leavesComponents/Leave";
import { LeaveBig } from "@/assets/leavesComponents/LeaveBig";
import { Section } from "@/components/share/section";
import s from "./our-team.module.css";
import { GlobalSLogo } from "./GlobalSLogo";

export const OurTeam = () => {
  return (
    <Section>
      <div className={s.ourTeam_container}>
        <GlobalSLogo w="248" h="51" />
        <h2>ACERCA DE NOSOTROS</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quos,
          exercitationem, ipsum enim id quibusdam dolor deleniti nobis voluptas
          mollitia sint, ex officiis. Minima obcaecati adipisci officia fuga
          ullam recusandae.
        </p>
        {/* <div className="relative"> */}
          {/* <Slices /> */}
          <CarrucelImg />
        {/* </div> */}
        <button className={s.buttom}>Quiero Conocerlos</button>
      </div>
    </Section>
  );
};
