import { LeaveClear } from "@/assets/leavesComponents/LeaveClear";
import { LeaveBig } from "@/assets/leavesComponents/LeaveBig";
import { services } from "@/moc/service.moc";
import { Section } from "@/components/share/section";
import { CardOurService } from "./our-service-card";
import s from "./out-services.module.css";

export const OurServices = () => {
  return (
    <Section>
      <div className={s.ourServices_title}>
        <h2>
          NUESTROS <br />
          PRINCIPALES SERVICIOS{" "}
        </h2>
      </div>
      <div className={s.cards_container}>
        {services.map((service, index) => (
          <CardOurService
            key={index}
            title={service.title}
            content={service.content}
          >
            <service.icon />
          </CardOurService>
        ))}
        <div className={s.purple_circle}></div>
      </div>
    </Section>
  );
};
