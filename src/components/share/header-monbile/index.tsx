import s from "./header-mobile.module.css";
import { LogoMobile } from "@/assets/header/pictures/LogoMobile";
import { BurgerBtnIcon } from "@/assets/header/icon/BurgerBtnIcon";

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
    <header className={s.header_container}>
      <div>
        <LogoMobile />
        <button className={s.burger}>
          <BurgerBtnIcon />
        </button>
      </div>
    </header>
  );
};
