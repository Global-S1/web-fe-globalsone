import { services } from "@/moc/service.moc";
import { Section } from "@/components/share/section";
import { CardOurService } from "./our-service-card";
import s from "./out-services.module.css";
import { LeaveHd } from "@/assets/leavesComponents/LeaveHd";
import { LeaveBig } from "@/assets/leavesComponents/LeaveBig";

export const OurServices = () => {
  return (
    <Section>
      <div className={s.ourServices_title}>
        <div className={s.purple_circle}></div>
        <h2>
          NUESTROS <br />
          PRINCIPALES SERVICIOS{" "}
        </h2>
      </div>
      <div className={s.cards_container}>
        <div className={s.leave_one}>
          <LeaveHd />
        </div>
        {services.map((service, index) => (
          <CardOurService
            key={index}
            title={service.title}
            content={service.content}
          >
            <div className={s.icon}>
              <service.icon />
            </div>
          </CardOurService>
        ))}
        <div className={s.purple_dot}></div>
        <div className={s.leave_two}>
          <LeaveBig />  
        </div>
      </div>
    </Section>
  );
};
