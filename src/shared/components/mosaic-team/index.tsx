import { LeaveClear } from "@/assets/leavesComponents/LeaveClear";
import { Section } from "@/shared/components/section";
import Image from "next/image";
import s from "./mosaic-team.module.css";

import { getMosaicTeam } from "./services/mosaic-team.service";

export const MosaicTeam = async () => {
  const data = await getMosaicTeam();
  return (
    <Section extendStyle={s.contactMosaic__section}>
      <div className={s.leave__top}>
        <LeaveClear />
      </div>
      <div className={s.contactMosaic__text__container}>
        <h2>{data.title}</h2>
      </div>
      <div className={s.leave__center}>
        <LeaveClear />
      </div>
      <div className={s.contactMosaic__container}>
        <div className={s.purple__circle}></div>
        <div className={s.green__circle}></div>
        <div className={s.grid_template}>
          {data.mosaicImages.map((img) => (
            <Image
              key={img.alt}
              src={img.img}
              alt={img.alt}
              width={800}
              height={800}
            />
          ))}
          <div className={s.contactMosaic__description__container}>
            <p>{data.description}</p>
          </div>
        </div>
      </div>
      <div className={s.leave__bottom}>
        <LeaveClear />
      </div>
    </Section>
  );
};
