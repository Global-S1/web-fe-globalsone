import Link from "next/link";
import { GlobalSLogo } from "@/assets/GlobalSLogo";
import { links } from "@/moc/routes.moc";
import { Phone } from "@/assets/header/icon/Phone";
import s from "./header.module.css";
import { ContactUsBtn } from "../contact-us-btn";

export const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.header__navbar}>
        <nav>
          <ul className={s.header__navbarLeft}>
            {links.map((link, index) => (
              <li key={index} className={s.header__item}>
                <Link href={link.path}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <GlobalSLogo w="192" h="40" style={s.header__logo} />
        <nav>
          <ul>
            <li>
              <ContactUsBtn />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
