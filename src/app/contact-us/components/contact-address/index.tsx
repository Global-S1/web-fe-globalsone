import { Section } from "@/shared/components/section";
import mountains from "@/assets/contact-us/address/background/mountains.png";
import { ActionButton } from "@/shared/components/action-button";
import building1 from "@/assets/contact-us/address/background/building1.png";
import building2 from "@/assets/contact-us/address/background/building2.png";
import building3 from "@/assets/contact-us/address/background/building3.png";
import s from "./contact-address.module.css";
import { IContactUsContactDataContent } from "../../interfaces/content.interface";
import { MailIcon } from "@/assets/contact-us/address/icons/MailIcon";
import { PhoneIcon } from "@/assets/contact-us/address/icons/PhoneIcon";
import { AddressIcon } from "@/assets/contact-us/address/icons/AddressIcon";

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
            <a href="mailto:contacto@globals.one" className={s.achor}>
              <ActionButton text={email} extendStyle={s.button__extendStyle}>
                <MailIcon />
              </ActionButton>
            </a>
            <a href="tel:+51902594035" className={s.achor}>
              <ActionButton text={phone} extendStyle={s.button__extendStyle}>
                <PhoneIcon />
              </ActionButton>
            </a>
            <a
              href="https://maps.app.goo.gl/t7ApEnhLD3cAkvdn9"
              target="_blank"
              className={s.achor}
            >
              <ActionButton
                text={address}
                extendStyle={s.button__extendStyle}
              >
                <AddressIcon />
              </ActionButton>
            </a>
          </div>
        </div>
        <div
          className={s.bg__img__container}
          style={{ backgroundImage: `url(${mountains.src})` }}
        >
          <div className={s.green__circle}></div>

          <div className={s.buildings__container}>
            <div style={{ backgroundImage: `url(${building1.src})` }}></div>
            <div style={{ backgroundImage: `url(${building2.src})` }}></div>
            <div style={{ backgroundImage: `url(${building3.src})` }}></div>
          </div>
        </div>
      </div>
    </Section>
  );
};
