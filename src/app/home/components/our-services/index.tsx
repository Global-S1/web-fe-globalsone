import { services } from "@/data-mock/service.moc";
import { Section } from "@/shared/components/section";
import { CardOurService } from "./our-service-card";
import s from "./out-services.module.css";
import { LeaveHd } from "@/assets/leavesComponents/LeaveHd";
import { LeaveBig } from "@/assets/leavesComponents/LeaveBig";
import VideoPlayer from "@/assets/home/our-services/pictures/videoPlayer.png";
import Tags from "@/assets/home/our-services/pictures/tags.png";
import Cpu from "@/assets/home/our-services/pictures/cpu.png";
import Users from "@/assets/home/our-services/pictures/users.png";

export const OurServices = ({ ourServiceData }) => {
  const listImg = [VideoPlayer, Tags, Cpu, Users];
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
        {ourServiceData.map((service, index) => {
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
