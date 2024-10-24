import { LeaveBig } from "@/assets/leavesComponents/LeaveBig";
import { LeaveClear } from "@/assets/leavesComponents/LeaveClear";
import { CarrucelImg } from "../carrucel-image";
import { CarrucelImageMobil } from "../carrucel-image-mobile";
import s from "./our-team.module.css";
import { getOurTeam } from "./service/our-team.service";
import { RedirectBtn } from "../redirect-btn";

export const OurTeam = async () => {
  const ourTeam = await getOurTeam();
  return (
    <div className={s.ourTeam_container}>
      <h2>{ourTeam.title}</h2>
      <p dangerouslySetInnerHTML={{ __html: ourTeam.description }} />
      <div className={s.ourTeam__leave__one}>
        <LeaveClear />
      </div>
      <CarrucelImg content={ourTeam.desktopImg} />
      <CarrucelImageMobil content={ourTeam.mobileImg} />
      <RedirectBtn route="/about-us" text="Quiero Conocerlos" />
      <div className={s.ourTeam__leave__two}>
        <LeaveClear />
      </div>
      <div className={s.ourTeam__leave__three}>
        <LeaveBig />
      </div>
      <div className={s.ourTeam__leave__four}>
        <LeaveBig />
      </div>
    </div>
  );
};
