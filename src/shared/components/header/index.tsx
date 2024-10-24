"use client";

import { GlobalSLogo } from "@/assets/GlobalSLogo";
import { NavigationLinks } from "@/shared/interfaces/layout.interface";
import Link from "next/link";
import { ContactBtn } from "../contact-btn";
import s from "./header.module.css";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

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
              <Link href={content.aboutUs.route}>{content.aboutUs.title}</Link>
            </li>
            <li className={s.header__item}>
              <Link href={"/#services-section"}>
                <button onClick={handleServices}>
                  {content.services.title}
                </button>
              </Link>
            </li>
          </ul>
        </nav>
        <div className={s.header__logo}>
          <Link href={"/"}>
            <GlobalSLogo />
          </Link>
        </div>
        <ContactBtn
          route={content.contactUs.route}
          title={content.contactUs.title}
        />
      </div>
    </header>
  );
};
