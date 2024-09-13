import Image from "next/image";
import heroPictureMobile from "@/assets/home/pictures/hero-pinctue-mobile.png";
import heroImg from "@/assets/heroImg.png";
import s from "./hero-central-picture.module.css"

export const HeroCentralPricture = () => {
  return (
    <>
      <Image
        src={heroPictureMobile}
        alt="Global S1"
        className={s.hero_picture_mobile}
      />
      <Image src={heroImg} alt="Global S1" className={s.hero_picture} />
    </>
  );
};
