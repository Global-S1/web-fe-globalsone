import { CarrucelImg } from "@/components/share/carrucel-image";
import { Section } from "@/components/share/section";
import { GlobalSLogo } from "./GlobalSLogo";
import s from "./our-team.module.css";
import { LeaveClear } from "@/assets/leavesComponents/LeaveClear";
import { LeaveBig } from "@/assets/leavesComponents/LeaveBig";
import { ActionButton } from "../action-button";

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
        <div className={s.ourTeam__leave__one}>
          <LeaveClear />
        </div>
        <CarrucelImg />
        {/* <button className={s.buttom}>Quiero Conocerlos</button> */}
        <ActionButton text="Quiero Conocerlos" />

        <div className={s.ourTeam__leave__two}>
          <LeaveClear />
        </div>
        <div className={s.ourTeam__leave__three}>
          <LeaveBig />
        </div>
      </div>
    </Section>
  );
};
