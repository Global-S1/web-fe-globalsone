import { Section } from "@/shared/components/section";
import mountains from "@/assets/contact-us/address/background/mountains.png";
import buildings from "@/assets/contact-us/address/background/buildings.png";
import s from "./contact-address.module.css";
import { IContactUsContactDataContent } from "../../interfaces/content.interface";
import { MailIcon } from "@/assets/contact-us/address/icons/MailIcon";
import { PhoneIcon } from "@/assets/contact-us/address/icons/PhoneIcon";
import { AddressIcon } from "@/assets/contact-us/address/icons/AddressIcon";
import { RedirectBtn } from "@/shared/components/redirect-btn";
import Link from "next/link";

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
          <div className={s.bg__blur}></div>
          <div className={s.title__container}>
            <h2>{city}</h2>
            <p>{description}</p>
          </div>
          <div className={s.buttons__container}>
            <Link href={"mailto:contacto@globals.one"}>
              <div>
                <MailIcon />
              </div>
              <p>{email}</p>
            </Link>
            <Link href={"tel:+51902594035"}>
              <div>
                <PhoneIcon />
              </div>
              <p>{phone}</p>
            </Link>
            <Link href={"https://maps.app.goo.gl/t7ApEnhLD3cAkvdn9"}>
              <div>
                <AddressIcon />
              </div>
              <p>{address}</p>
            </Link>
          </div>
        </div>
        <div className={s.bg__img__container}>
          <div className={s.green__circle}></div>

          <div
            className={s.mountains}
            style={{ backgroundImage: `url(${mountains.src})` }}
          ></div>
          <div
            className={s.buildings}
            style={{ backgroundImage: `url(${buildings.src})` }}
          ></div>
        </div>
      </div>
    </Section>
  );
};
