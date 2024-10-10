"use client";

import { GlobalSLogo } from "@/assets/GlobalSLogo";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ContactBtn } from "../contact-btn";
import s from "./header.module.css";

export const Header = () => {
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
              <Link href={"/"}>Inicio</Link>
            </li>
            <li className={s.header__item}>
              <Link href={"/about-us"}>Acerca de Nosotros</Link>
            </li>
            <li className={s.header__item}>
              <button onClick={handleServices}>Servicios</button>
            </li>
          </ul>
        </nav>
        <div className={s.header__logo}>
          <GlobalSLogo />
        </div>
        <ContactBtn />
      </div>
    </header>
  );
};
