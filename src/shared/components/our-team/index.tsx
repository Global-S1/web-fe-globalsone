import { LeaveClear } from "@/assets/leavesComponents/LeaveClear";
import { LeaveBig } from "@/assets/leavesComponents/LeaveBig";
import { CarrucelImageMobil } from "../carrucel-image-mobile";
import { CarrucelImg } from "../carrucel-image";
import s from "./our-team.module.css";
import { IOurTeam } from "@/app/home/interfaces/content.interface";
import { getOurTeam } from "./service/our-team.service";

interface Props {
  content: IOurTeam;
}

export const OurTeam = async ({ content }: Props) => {
  const people = await getOurTeam();
  return (
    <div className={s.ourTeam_container}>
      <h2>{content.title}</h2>
      <p>{content.description}</p>
      <div className={s.ourTeam__leave__one}>
        <LeaveClear />
      </div>
      <CarrucelImg content={people} />
      <CarrucelImageMobil content={people} />
      <div className={s.ourTeam__leave__two}>
        <LeaveClear />
      </div>
      <div className={s.ourTeam__leave__three}>
        <LeaveBig />
      </div>
    </div>
  );
};
