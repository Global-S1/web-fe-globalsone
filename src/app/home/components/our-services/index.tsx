import { services } from "@/data-mock/service.moc";
import { Section } from "@/shared/components/section";
import { CardOurService } from "./our-service-card";
import s from "./out-services.module.css";
import { LeaveHd } from "@/assets/leavesComponents/LeaveHd";
import { LeaveBig } from "@/assets/leavesComponents/LeaveBig";
import VideoPlayer from "@/assets/home/our-services/pictures/videoPlayer.png";
import Ticket from "@/assets/home/our-services/pictures/tags.png";
import CpuIcon from "@/assets/home/our-services/pictures/cpu.png";
import PeopleAvatars from "@/assets/home/our-services/pictures/users.png";
import { IService } from "@/shared/interfaces/IService";

interface Props {
  title: string;
  services: {
    [key: string]: IService;
  };
}

export const OurServices = ({ content }: Props) => {
  const listImg = [VideoPlayer, Ticket, CpuIcon, PeopleAvatars];
  const servicesArray = Object.values(content.services);
  console.log("im a var content", content)
  return (
    <Section extendStyle={s.ourService__section} id="services-section">
      <div className={s.ourServices_title}>
        <div className={s.purple_circle}></div>
        <h2>{content.title}</h2>
      </div>
      <div className={s.cards_container}>
        {servicesArray.map((service, index) => (
          <CardOurService
            key={index}
            title={service.title}
            content={service.content}
            img={service.img}
          />
        ))}
        <div className={s.purple_dot}></div>
      </div>
    </Section>
  );
};
