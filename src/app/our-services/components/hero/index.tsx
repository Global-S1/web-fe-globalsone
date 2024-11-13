import { Section } from "@/shared/components/section";
import laptop from "@/assets/our-services/hero/background/laptop.png";
import board from "@/assets/our-services/hero/pictures/board.png";
import s from "./hero.module.css";
import Image from "next/image";

export const Hero = () => {
  return (
    <Section extendStyle={s.hero__section}>
      <div className={s.hero__container}>
        <div className={s.laptop}></div>
        <Image
          src={board}
          alt="El equipo de GlobalS1 trabajando para ti"
          className={s.board__img}
        />
        <div className={s.title__container}>
          <h2>Conoce lo que podemos hacer por ti</h2>
          <p>
            {" "}
            Your journey to finding the perfect property begins here. Explore
            our listings to find the home that matches your dreams.
          </p>
        </div>
      </div>
    </Section>
  );
};
