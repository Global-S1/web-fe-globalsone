"use client";
import Link from "next/link";
import s from "./header-mobile.module.css";
import { LogoMobile } from "@/assets/header/pictures/LogoMobile";
import { BurgerBtnIcon } from "@/assets/header/icon/BurgerBtnIcon";
import { ContactBtn } from "../contact-btn";
import data from "@/data-mock/link-pages.json";
import { ClosedModal } from "@/assets/header-mobile/icons/ClosedModal";
import clsx from "clsx";
import { useState } from "react";

export const HeaderMobile = () => {
  const links = data.data.links;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handlerBtnMenu = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <header className={s.headerMobile}>
      <div className={s.headerMobile__container}>
        <LogoMobile />
        <button onClick={handlerBtnMenu} className={s.headerMobile__burger}>
          <BurgerBtnIcon />
        </button>
        <div className={s.headerMobile__contactUsBtn}>
          <ContactBtn />
        </div>
        {isModalOpen && (
          <div className={clsx(s.headerMobile__menu__modal, s.active)}>
            <div className={s.menu__container}>
              <div className={s.menu__list}>
                {links.map((link, index) => (
                  <li key={index} className={s.header__item}>
                    <Link href={link.path}>{link.label}</Link>
                  </li>
                ))}
              </div>
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
