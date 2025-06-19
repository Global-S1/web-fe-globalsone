import { NavigationLinks } from "@/shared/interfaces/layout.interface";
import Link from "next/link";
import s from "./navbar-desktop.module.css";
interface IProps {
  content: NavigationLinks;
}

export const NavBarDesktop = ({ content }: IProps): JSX.Element => {
  return (
    <nav className={s.navbar__desk__container}>
      <ul className={s.navbar__desk__list}>
        <li>
          <Link href={content.home.route}>{content.home.title}</Link>
        </li>
        <li>
          <Link href={content.aboutUs.route}>Nosotros</Link>
        </li>
        <li>
          <Link href={content.services.route}>{content.services.title}</Link>
        </li>
      </ul>
    </nav>
  );
};
