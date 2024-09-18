import Link from "next/link";
import { Phone } from "@/assets/header/icon/Phone";
import s from "./contact-us-btn.module.css"

export const ContactUsBtn = () => {
  return (
    <div className={s.button__container}>
      <Phone />
      <Link href="/contact">Contactanos</Link>
    </div>
  );
};
