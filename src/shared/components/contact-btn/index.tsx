import { Phone } from "@/assets/header/icon/Phone";
import Link from "next/link";
import s from "./contact-btn.module.css";

export const ContactBtn = () => {
  return (
    <button className={s.contactBtn}>
      <Link href="/contact-us">
        <div className={s.contactBtn__icon}>
          <Phone />
        </div>
        <p className={s.contactBtn__text}>Contáctanos</p>
      </Link>
    </button>
  );
};
