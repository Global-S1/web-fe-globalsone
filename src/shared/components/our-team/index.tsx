import { LeaveClear } from "@/assets/leavesComponents/LeaveClear";
import { LeaveBig } from "@/assets/leavesComponents/LeaveBig";
import { CarrucelImageMobil } from "../carrucel-image-mobile";
import { CarrucelImg } from "../carrucel-image";
import s from "./our-team.module.css";

export const OurTeam = ({ ourTeamData }) => {
  console.log(ourTeamData.description);
  return (
    <div className={s.ourTeam_container}>
      <h2>ACERCA DE NOSOTROS</h2>
      <p>{ourTeamData.description}</p>
      <div className={s.ourTeam__leave__one}>
        <LeaveClear />
      </div>
      <CarrucelImg />
      <CarrucelImageMobil />
      <div className={s.ourTeam__leave__two}>
        <LeaveClear />
      </div>
      <div className={s.ourTeam__leave__three}>
        <LeaveBig />
      </div>
    </div>
  );
};
