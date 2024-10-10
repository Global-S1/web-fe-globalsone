"use client";

import { GlobalSLogo } from "@/assets/GlobalSLogo";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ContactBtn } from "../contact-btn";
import s from "./header.module.css";
import { NavigationLinks } from "@/shared/interfaces/layout.interface";

interface Props {
  content: NavigationLinks;
}

export const Header = ({ content }: Props) => {
  const router = useRouter();
  const handleServices = () => {
    router.push("/");
    setTimeout(() => {
      document
        .getElementById("services-section")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 200);
  };
  return (
    <header className={s.header}>
      <div className={s.header__navbar}>
        <nav>
          <ul className={s.header__navbarLeft}>
            <li className={s.header__item}>
              <Link href={content.home.route}>{content.home.title}</Link>
            </li>
            <li className={s.header__item}>
              <Link href={content["about-us"].route}>
                {content["about-us"].title}
              </Link>
            </li>
            <li className={s.header__item}>
              <button onClick={handleServices}>{content.services.title}</button>
            </li>
          </ul>
        </nav>
        <div className={s.header__logo}>
          <GlobalSLogo />
        </div>
        <ContactBtn
          route={content["contact-us"].route}
          title={content["contact-us"].title}
        />
      </div>
    </header>
  );
};
