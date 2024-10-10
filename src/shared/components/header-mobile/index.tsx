"use client";

import { ClosedModal } from "@/assets/header-mobile/icons/ClosedModal";
import { BurgerBtnIcon } from "@/assets/header/icon/BurgerBtnIcon";
import { LogoMobile } from "@/assets/header/pictures/LogoMobile";
import { NavigationLinks } from "@/shared/interfaces/layout.interface";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ContactBtn } from "../contact-btn";
import s from "./header-mobile.module.css";

interface Props {
  content: NavigationLinks;
}

export const HeaderMobile = ({ content }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handlerBtnMenu = () => {
    setIsModalOpen(!isModalOpen);
  };
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
    <header className={s.headerMobile}>
      <div className={s.headerMobile__container}>
        <Link href={"/"}>
          <LogoMobile />
        </Link>
        <button onClick={handlerBtnMenu} className={s.headerMobile__burger}>
          <BurgerBtnIcon />
        </button>
        <div className={s.headerMobile__contactUsBtn}>
          <ContactBtn {...content["contact-us"]} />
        </div>
        {isModalOpen && (
          <div className={clsx(s.headerMobile__menu__modal, s.active)}>
            <div className={s.menu__container}>
              <ul className={s.menu__list}>
                <li className={s.header__item}>
                  <Link href={content.home.route}>{content.home.title}</Link>
                </li>
                <li className={s.header__item}>
                  <Link href={content["about-us"].route}>
                    {content["about-us"].title}
                  </Link>
                </li>
                <li className={s.header__item}>
                  <button onClick={handleServices}>
                    {content.services.title}
                  </button>
                </li>
              </ul>
            </div>
            <div className={s.closed__btn} onClick={handlerBtnMenu}>
              <ClosedModal />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
