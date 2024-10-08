import { services } from "@/data-mock/service.moc";
import { Section } from "@/shared/components/section";
import { CardOurService } from "./our-service-card";
import s from "./out-services.module.css";
import { LeaveHd } from "@/assets/leavesComponents/LeaveHd";
import { LeaveBig } from "@/assets/leavesComponents/LeaveBig";
import { VideoPlayer } from "@/assets/home/our-services/icons/VideoPlayer";
import { Ticket } from "@/assets/home/our-services/icons/Ticket";
import { CpuIcon } from "@/assets/home/our-services/icons/CpuIcon";
import { PeopleAvatars } from "@/assets/home/icons/PeopleAvatars";
import { IService } from "../../interfaces/content.interface";

interface Props {
  content: IService[];
}

export const OurServices = ({ content }: Props) => {
  const listImg = [VideoPlayer, Ticket, CpuIcon, PeopleAvatars];
  return (
    <Section extendStyle={s.ourService__section} id="services-section">
      <div className={s.ourServices_title}>
        <div className={s.purple_circle}></div>
        <h2>
          NUESTROS <br />
          PRINCIPALES SERVICIOS{" "}
        </h2>
      </div>
      <div className={s.cards_container}>
        {content.map((service, index) => {
          const IconComponent = listImg[index];
          return (
            <CardOurService
              key={index}
              title={service.title}
              content={service.content}
              img={listImg[index]}
            />
          );
        })}
        <div className={s.purple_dot}></div>
      </div>
    </Section>
  );
};
