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

export const OurServices = ({ ourServiceData }) => {
  const listImg = [VideoPlayer, Ticket, CpuIcon, PeopleAvatars];
  return (
    <Section extendStyle={s.ourService__section}>
      <div className={s.ourServices_title}>
        <div className={s.purple_circle}></div>
        <h2>
          NUESTROS <br />
          PRINCIPALES SERVICIOS{" "}
        </h2>
      </div>
      <div className={s.cards_container}>
        {ourServiceData.map((service, index) => {
          const IconComponent = listImg[index];
          return (
            <CardOurService
              key={index}
              title={service.title}
              content={service.content}
            >
              <div className={s.icon}>{IconComponent && <IconComponent />}</div>
            </CardOurService>
          );
        })}
        <div className={s.purple_dot}></div>
      </div>
    </Section>
  );
};
