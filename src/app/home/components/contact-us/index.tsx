import bgContac from "@/assets/background/bgContact.png";
import { Pice1 } from "@/assets/home/icons/Pice";
import { Section } from "@/components/share/section";
import ListOfFiles from "@/assets/home/pictures/ListOfFiles.svg";
import Image from "next/image";
import s from "./contact-us.module.css";

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
          <button className={s.button}>Contáctanos Ahora</button>
        </div>
        <div className={s.green_circle}></div>
      </div>
    </Section>
  );
};
