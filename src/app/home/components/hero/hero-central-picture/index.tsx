import Image from "next/image";
import heroPictureMobile from "@/assets/home/hero/pictures/hero-pinctue-mobile.webp";
import heroImg from "@/assets/home/hero/pictures/heroImg.png";
import bgCenterImg from "@/assets/home/hero/background/centralImgBg.png";
import s from "./hero-central-picture.module.css";

export const HeroCentralPicture = () => {
  return (
    <div className={s.heroCenterPricture__container}>
      <div
        className={s.bg__light}
        style={{ backgroundImage: `url(${bgCenterImg.src})` }}
      ></div>
      <Image
        src={heroPictureMobile.src}
        alt="Global S1"
        className={s.hero_picture_mobile}
        width={496}
        height={496}
        priority
        loading="eager"
        fetchPriority="high"
      />
      <Image src={heroImg} alt="Global S1" className={s.hero_picture} />
    </div>
  );
};
