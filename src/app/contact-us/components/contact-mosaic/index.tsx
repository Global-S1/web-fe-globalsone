import { Section } from "@/shared/components/section";
import s from "./contact-mosaic.module.css";
import Image from "next/image";
import { LeaveClear } from "@/assets/leavesComponents/LeaveClear";

import boss from "@/assets/contact-us/mosaic/pictures/boss.png";
import counter from "@/assets/contact-us/mosaic/pictures/counter.png";
import lobbies from "@/assets/contact-us/mosaic/pictures/lobbies.png";
import peter from "@/assets/contact-us/mosaic/pictures/peter.png";
import room from "@/assets/contact-us/mosaic/pictures/room.png";
import team from "@/assets/contact-us/mosaic/pictures/team.png";
import { IContactUsOurTeamContent } from "../../interfaces/content.interface";

export const ContactMosaic = ({
  title,
  description,
}: IContactUsOurTeamContent) => {
  return (
    <Section extendStyle={s.contactMosaic__section}>
      <div className={s.leave__top}>
        <LeaveClear />
      </div>
      <div className={s.contactMosaic__text__container}>
        <h2>{title}</h2>
      </div>
      <div className={s.leave__center}>
        <LeaveClear />
      </div>
      <div className={s.contactMosaic__container}>
        <div className={s.purple__circle}></div>
        <div className={s.green__circle}></div>
        <div className={s.grid_template}>
          <Image src={counter} alt="recepcion del equipo globals en colombia" />
          <Image
            src={lobbies}
            alt="foto del equipo globals trabajando remoto"
          />
          <Image
            src={room}
            alt="nuestro equipo globals trabajando de manera remota"
          />
          <Image src={team} alt="Fotografia de nuestro equipo completo" />
          <Image src={boss} alt="Nuestro CEO Daniel Boggiano" />
          <Image
            src={peter}
            alt="Nuestro programador estrella Peter Castillo"
          />
        </div>
      </div>
      <div className={s.contactMosaic__description__container}>
        <p>{description}</p>
      </div>
      <div className={s.leave__bottom}>
        <LeaveClear />
      </div>
    </Section>
  );
};
