import { LeaveBig } from "@/assets/leavesComponents/LeaveBig";
import { LeaveClear } from "@/assets/leavesComponents/LeaveClear";
import { CarrucelImg } from "../carrucel-image";
import { CarrucelImageMobil } from "../carrucel-image-mobile";
import s from "./our-team.module.css";
import { getOurTeam } from "./service/our-team.service";
import LogoOurteam from "@/assets/GloblaS1.png";
import Image from "next/image";
import Link from "next/link";
import { ActionButton } from "../action-button";

export const OurTeam = async () => {
  const ourTeam = await getOurTeam();
  return (
    <div className={s.ourTeam_container}>
      <h2>{ourTeam.title}</h2>
      <p>{ourTeam.description}</p>
      <div className={s.ourTeam__leave__one}>
        <LeaveClear />
      </div>
      <CarrucelImg content={ourTeam.desktopImg} />
      <CarrucelImageMobil content={ourTeam.mobileImg} />
      <Link href={"/about-us"} className={s.link__btn}>
        <ActionButton text="Quiero Conocerlos" />
      </Link>
      <div className={s.ourTeam__leave__two}>
        <LeaveClear />
      </div>
      <div className={s.ourTeam__leave__three}>
        <LeaveBig />
      </div>
      <div className={s.ourTeam__leave__four}>
        <LeaveClear />
      </div>
    </div>
  );
};
