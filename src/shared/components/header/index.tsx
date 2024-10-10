import Link from "next/link";
import { GlobalSLogo } from "@/assets/GlobalSLogo";
import s from "./header.module.css";
import data from "@/data-mock/link-pages.json";
import { ContactBtn } from "../contact-btn";

export const Header = () => {
  const links = data.data.links;
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
        <div className={s.header__logo}>
          <Link href={"/"}>
            <GlobalSLogo />
          </Link>
        </div>
        <ContactBtn />
      </div>
    </header>
  );
};
