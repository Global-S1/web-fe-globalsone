import { Phone } from "@/assets/header/icon/Phone";
import Link from "next/link";
import s from "./contact-btn.module.css";

interface Props {
  title: string;
  route: string;
}

export const ContactBtn = ({ route, title }: Props) => {
  return (
    <button className={s.contactBtn}>
      <Link href={route}>
        <div className={s.contactBtn__icon}>
          <Phone />
        </div>
        <p className={s.contactBtn__text}>{title}</p>
      </Link>
    </button>
  );
};
