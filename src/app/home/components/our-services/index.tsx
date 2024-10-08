import { PeopleAvatars } from "@/assets/home/icons/PeopleAvatars";
import { CpuIcon } from "@/assets/home/our-services/icons/CpuIcon";
import { Ticket } from "@/assets/home/our-services/icons/Ticket";
import { VideoPlayer } from "@/assets/home/our-services/icons/VideoPlayer";
import { Section } from "@/shared/components/section";
import { IOurServices } from "../../interfaces/content.interface";
import { CardOurService } from "./our-service-card";
import s from "./out-services.module.css";

interface Props {
  content: IOurServices;
}

export const OurServices = ({ content }: Props) => {
  const listImg = [VideoPlayer, Ticket, CpuIcon, PeopleAvatars];
  return (
    <Section extendStyle={s.ourService__section}>
      <div className={s.ourServices_title}>
        <div className={s.purple_circle}></div>
        <h2>{content.title}</h2>
      </div>
      <div className={s.cards_container}>
        {content.services.map((service, index) => {
          const IconComponent = listImg[index];
          return (
            <CardOurService key={index} service={service}>
              <div className={s.icon}>{IconComponent && <IconComponent />}</div>
            </CardOurService>
          );
        })}
        <div className={s.purple_dot}></div>
      </div>
    </Section>
  );
};
