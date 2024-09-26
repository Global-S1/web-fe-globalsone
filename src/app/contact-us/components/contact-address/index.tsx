import { Section } from "@/shared/components/section";
import s from "./contact-address.module.css";

import mountains from "@/assets/contact-us/background/mountains.png";
import { ActionButton } from "@/shared/components/action-button";
import { Building1 } from "@/assets/contact-us/icons/Building1";
import { Building2 } from "@/assets/contact-us/icons/Building2";
import { Building3 } from "@/assets/contact-us/icons/Building3";

export const ContactAddress = ({ addres, description, email, phone, city }) => {
  return (
    <Section extendStyle={s.address__section}>
      <div className={s.address__container}>
        <div className={s.address__text__container}>
          <div className={s.title__container}>
            {/* <span>Regional Offices</span> */}
            <h2>{addres}</h2>
            <p>{description}</p>
          </div>
          <div className={s.buttons__container}>
            <ActionButton text={email} />
            <ActionButton text={phone} />
            <ActionButton text={city?.name} />
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
