import Image from "next/image";
import { Slices } from "@/components/Slices";
import { Leave } from "@/assets/leavesComponents/Leave";
import { LeaveBig } from "@/assets/leavesComponents/LeaveBig";
import { Section } from "@/components/share/section";
import s from "./our-team.module.css";
import { GlobalSLogo } from "./GlobalSLogo";

export const OurTeam = () => {
  return (
    <Section
    // styles={{ marginTop: "10rem" }}
    >
      <div className={s.ourTeam_container}>
        <GlobalSLogo w="248" h="51" />
        <h2>ACERCA DE NOSOTROS</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quos,
          exercitationem, ipsum enim id quibusdam dolor deleniti nobis voluptas
          mollitia sint, ex officiis. Minima obcaecati adipisci officia fuga
          ullam recusandae.
        </p>
        <div className="relative">
          {/* <Leave
          style={{
            position: "absolute",
            top: "10%",
            left: "31%",
            transform: "translate(-50%, -50%) rotate(-58deg)",
            zIndex: 10,
          }}
        /> */}
          <Slices />
          {/* <LeaveBig
          style={{
            position: "absolute",
            bottom: "-7%",
            left: "-13%",
            zIndex: 10,
          }}
        /> */}
        </div>
        <button className={s.buttom}>Quiero Conocerlos</button>
      </div>
    </Section>
  );
};
