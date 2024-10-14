import bgContac from "@/assets/home/contact-us/background/bgContact.png";
import bgContactMobile from "@/assets/home/contact-us/background/MaskContactMobile.png";
import { Section } from "@/shared/components/section";
import s from "./contact-us.module.css";
import { ActionButton } from "@/shared/components/action-button";
import Link from "next/link";
import { FC } from "react";

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
        <div className={s.text_container}>
          <h3 dangerouslySetInnerHTML={{ __html: content }} />
          <Link href={"/contact-us"}>
            <ActionButton
              text="Contáctanos Ahora"
              extendStyle={s.contact__button}
            />
          </Link>
        </div>
        <div className={s.green_circle}></div>
      </div>
    </Section>
  );
};
