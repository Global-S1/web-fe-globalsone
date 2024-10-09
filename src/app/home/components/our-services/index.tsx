import { Section } from "@/shared/components/section";
import { IOurServices } from "../../interfaces/content.interface";
import { CardOurService } from "./our-service-card";
import s from "./out-services.module.css";

interface Props {
  content: IOurServices;
}

export const OurServices = ({ content }: Props) => {
  const { services, title } = content;
  const servicesArray = Object.values(services);

  return (
    <Section extendStyle={s.ourService__section} id="services-section">
      <div className={s.ourServices_title}>
        <div className={s.purple_circle}></div>
        <h2>{title}</h2>
      </div>
      <div className={s.cards_container}>
        {servicesArray.map((service, index) => (
          <CardOurService key={index} service={service} />
        ))}
        <div className={s.purple_dot}></div>
      </div>
    </Section>
  );
};
