import { Section } from "@/shared/components/section";
import mountains from "@/assets/contact-us/adress/background/mountains.png";
import { ActionButton } from "@/shared/components/action-button";
import { Building1 } from "@/assets/contact-us/adress/icons/Building1";
import { Building2 } from "@/assets/contact-us/adress/icons/Building2";
import { Building3 } from "@/assets/contact-us/adress/icons/Building3";
import s from "./contact-address.module.css";
import { IContactUsContactDataContent } from "../../interfaces/content.interface";

export const ContactAddress = ({
  city,
  description,
  email,
  phone,
  address,
}: IContactUsContactDataContent) => {
  return (
    <Section extendStyle={s.address__section}>
      <div className={s.address__container}>
        <div className={s.address__text__container}>
          <div className={s.title__container}>
            <h2>{city}</h2>
            <p>{description}</p>
          </div>
          <div className={s.buttons__container}>
            <ActionButton text={email} />
            <ActionButton text={phone} />
            <ActionButton text={address} />
          </div>
        </div>
        <div
          className={s.bg__img__container}
          style={{ backgroundImage: `url(${mountains.src})` }}
        >
          <Building1 />
          <Building2 />
          <Building3 />
        </div>
      </div>
    </Section>
  );
};
