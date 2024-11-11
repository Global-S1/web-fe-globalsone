import { NavigationLinks } from "@/shared/interfaces/layout.interface";
import { MouseEvent, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import s from "./navbar-desktop.module.css";
import { ROOT_PATH } from "@/shared/constants/url";
interface IProps {
  content: NavigationLinks;
}

export const NavBarDesktop = ({ content }: IProps): JSX.Element => {
  const router = useRouter();

  const handleServices = (e: any) => {
    e.preventDefault();
    const currentRoute =
      typeof window !== "undefined" ? window.location.pathname : null;
    console.log("currentRoute", currentRoute);
    if (currentRoute) {
      window.location.href = `${
        ROOT_PATH?.length ? ROOT_PATH : "/"
      }#services-section`;
    }
  };

  const handlerHome = () => {
    router.push("/");
  };
  
  return (
    <nav className={s.navbar__desk__container}>
      <ul className={s.navbar__desk__list}>
        <li>
          <button onClick={handlerHome}>{content.home.title}</button>
        </li>
        <li>
          <Link href={content.aboutUs.route}>{content.aboutUs.title}</Link>
        </li>
        <li>
          <button onClick={handleServices}>{content.services.title}</button>
        </li>
      </ul>
    </nav>
  );
};
