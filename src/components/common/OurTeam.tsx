import { GlobalSLogo } from "@/assets/GlobalSLogo";
import Image from "next/image";
import { Slices } from "@/components/Slices";
import { Leave } from "@/assets/leavesComponents/Leave";
import { LeaveBig } from "@/assets/leavesComponents/LeaveBig";
import Section from "@/components/common/Section";

const OurTeam = () => {
  return (
    <Section styles={{marginTop: "10rem"}}>
      <GlobalSLogo w="210" h="44"/>
      <h2 className="text-base sm:text-big md:text-title-9 lg:text-title-7 xl:text-title-5 text-inside-green mb-4 ">ACERCA DE NOSOTROS</h2>
      <p className="text-[11px] sm:text-micro md:text-petite lg:text-base xl:text-medium text-center max-w-[970px] m-auto mb-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quos,
        exercitationem, ipsum enim id quibusdam dolor deleniti nobis voluptas
        mollitia sint, ex officiis. Minima obcaecati adipisci officia fuga ullam
        recusandae.
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
      <button className="bg-custom-gradian-btn-project mt-20 font-futura w-[279px] h-[58px] rounded-xl">Quiero Conocerlos</button>
    </Section>
  );
};
export default OurTeam;
