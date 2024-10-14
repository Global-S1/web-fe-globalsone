import { SendIcon } from "@/assets/footer/icons/SendIcon";
import { MailIcon } from "../mail-icon.tsx";
import s from "./search-input.module.css";
import Link from "next/link.js";
import { GlobalSLogo } from "@/assets/GlobalSLogo";
import { LogoMobile } from "@/assets/header/pictures/LogoMobile";
import { FC } from "react";

interface Prop {
  route: string;
}

export const SearchInput: FC<Prop> = ({ route }) => {
  return (
    <div className={s.search__section}>
      <Link href={route} className={s.logo__desk}>
        <GlobalSLogo />
      </Link>
      <div className={s.logo__mobile}>
        <LogoMobile />
      </div>
      <div className={s.search__container}>
        <div className={s.mail__icon}>
          <MailIcon />
        </div>
        <input
          type="text"
          placeholder="Ingresa tu email"
          className={s.input__search}
        />
        <button className={s.send__icon}>
          <SendIcon />
        </button>
      </div>
    </div>
  );
};
