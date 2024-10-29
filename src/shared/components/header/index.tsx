"use client";
import { LogoMobile } from "@/assets/header/pictures/LogoMobile";
import { NavigationLinks } from "@/shared/interfaces/layout.interface";
import Link from "next/link";
import s from "./header-mobile.module.css";
import { HeaderMobileProvider } from "./context/header-provider";
import { Phone } from "@/assets/header/icon/Phone";
import { NavBarMobile } from "./navbar-mobile";
import { NavBarDesktop } from "./navbar-desktop";
interface Props {
  content: NavigationLinks;
}

export const Header = ({ content }: Props) => {
  const { contactUs } = content;

  return (
    <HeaderMobileProvider>
      <header className={s.header}>
        <div className={s.header__container}>
          <Link href={"/"} className={s.logo__mobile}>
            <LogoMobile />
          </Link>
          <NavBarMobile content={content} />
          <NavBarDesktop content={content} />
          <Link href={contactUs.route} className={s.contact__btn}>
            <div className={s.phone_icon}>
              <Phone />
            </div>
            <p>{contactUs.title}</p>
          </Link>
        </div>
      </header>
    </HeaderMobileProvider>
  );
};
