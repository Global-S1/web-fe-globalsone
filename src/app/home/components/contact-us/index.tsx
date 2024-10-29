import bgContac from "@/assets/home/contact-us/background/bgContact.png";
import bgContactMobile from "@/assets/home/contact-us/background/MaskContactMobile.png";
import { Section } from "@/shared/components/section";
import s from "./contact-us.module.css";
import { FC } from "react";
import { RedirectBtn } from "@/shared/components/redirect-btn";

interface Prop {
  content: string;
}
export const ContactUs: FC<Prop> = ({ content }) => {
  return (
    <Section extendStyle={s.contacUs__section}>
      <div className={s.contactUs_container}>
        <div
          className={s.bg__mobile}
          style={{
            backgroundImage: `url(${bgContactMobile.src})`,
          }}
        ></div>

        <div
          className={s.bg__desktop}
          style={{
            backgroundImage: `url(${bgContac.src})`,
          }}
        ></div>
        <div className={s.purple_circle}></div>
        <div className={s.purple_rec}></div>
        <div className={s.text_container}>
          <h3 dangerouslySetInnerHTML={{ __html: content }} />
          <RedirectBtn route="/contact-us" text="Contáctanos Ahora" />
        </div>
        <div className={s.green_circle}></div>
      </div>
    </Section>
  );
};
