import Link from "next/link";
import { GlobalSLogo } from "@/assets/GlobalSLogo";
import { links } from "@/moc/routes.moc";
import s from "./header.module.css";

const Header = () => {
  console.log(links);
  return (
    <header className={s.header}>
      <div className={s.container_navbar}>
        <nav>
          <ul className={s.navbar_left}>
            {links.map((link, index) => (
              <li key={index}>
                <Link href={link.path}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <GlobalSLogo w="192" h="40" style={s.logo} />
        <nav>
          <ul>
            <li className={s.navbar_right}>
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
