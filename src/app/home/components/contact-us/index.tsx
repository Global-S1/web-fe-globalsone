import bgContac from "@/assets/background/bgContact.png";
import { Section } from "@/components/share/section";
import s from "./contact-us.module.css";
import { ActionButton } from "@/components/share/action-button";

export const ContactUs = () => {
  return (
    <Section>
      <div
        className={s.contactUs_container}
        style={{
          backgroundImage: `url(${bgContac.src})`,
        }}
      >
        <div className={s.purple_circle}></div>
        <div className={s.text_container}>
          <h3>
            ¿Listo para <br />
            transformar <br />
            tu negocio?
          </h3>
         
          <ActionButton text="Contáctanos Ahora"/>
        </div>
        <div className={s.green_circle}></div>
      </div>
    </Section>
  );
};
