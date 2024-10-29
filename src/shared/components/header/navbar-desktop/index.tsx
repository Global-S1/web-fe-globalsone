import { NavigationLinks } from "@/shared/interfaces/layout.interface";
import { FC } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import s from "./navbar-desktop.module.css";
interface IProps {
  content: NavigationLinks;
}

export const NavBarDesktop: FC<IProps> = ({ content }) => {
  const router = useRouter();
  const handleServices = () => {
    router.push("/");
    setTimeout(() => {
      document
        .getElementById("services-section")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 300);
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
          {/* <button onClick={handleServices}>{content.services.title}</button> */}
          <Link href={content.services.route}>{content.services.title}</Link>
        </li>
      </ul>
    </nav>
  );
};
