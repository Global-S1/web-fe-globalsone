import { Phone } from "@/assets/header/icon/Phone";
import Link from "next/link";
import s from "./contact-btn.module.css"

export const ContactBtn = () => {
  return (
    <button className={s.button}>
      <Link href="/contact-us">
        <div className={s.phoneIcon}>
          <Phone />
        </div>
        <p className={s.text}>Contáctanos</p>
      </Link>
    </button>
  );
};
