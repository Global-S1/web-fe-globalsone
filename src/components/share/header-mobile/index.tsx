import s from "./header-mobile.module.css";
import { LogoMobile } from "@/assets/header/pictures/LogoMobile";
import { BurgerBtnIcon } from "@/assets/header/icon/BurgerBtnIcon";
import { ContactUsBtn } from "../contact-us-btn";

const links = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "About Us",
    path: "/about",
  },
  {
    label: "Properties",
    path: "/projects",
  },
  {
    label: "Services",
    path: "/services",
  },
  {
    label: "Contact Us",
    path: "/contact",
  },
];

export const HeaderMobile = () => {
  return (
    <header className={s.headerMobile}>
      <div className={s.headerMobile__container}>
        <LogoMobile />
        <button className={s.headerMobile__burger}>
          <BurgerBtnIcon />
        </button>
        <div className={s.headerMobile__contactUsBtn}>
          <ContactUsBtn />
        </div>
      </div>
    </header>
  );
};
