import s from "./header-mobile.module.css";
import { LogoMobile } from "@/assets/header/pictures/LogoMobile";
import { BurgerBtnIcon } from "@/assets/header/icon/BurgerBtnIcon";
import { ContactBtn } from "../contact-btn";

export const HeaderMobile = () => {
  return (
    <header className={s.headerMobile}>
      <div className={s.headerMobile__container}>
        <LogoMobile />
        <button className={s.headerMobile__burger}>
          <BurgerBtnIcon />
        </button>
        <div className={s.headerMobile__contactUsBtn}>
          <ContactBtn />
        </div>
      </div>
    </header>
  );
};
