import Image from "next/image";
import heroPictureMobile from "@/assets/home/hero/pictures/hero-pinctue-mobile.png";
import heroImg from "@/assets/home/hero/pictures/heroImg.png";
import bgCenterImg from "@/assets/home/hero/background/centralImgBg.png";
import s from "./hero-central-picture.module.css";

export const HeroCentralPicture = () => {
  return (
    <div
      className={s.heroCenterPricture__container}
      // style={{ backgroundImage: `url(${bgCenterImg.src})` }}
    >
      <Image
        src={heroPictureMobile}
        alt="Global S1"
        className={s.hero_picture_mobile}
      />
      <Image src={heroImg} alt="Global S1" className={s.hero_picture} />
    </div>
  );
};
