"use client";
import { motion } from "framer-motion";
import { MenuItem } from "../menu-item";
import s from "./navigation.module.css";
import { HeaderMobileContext } from "../../context/header-context";
import { FC, useContext } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

interface IProp {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

export const Navigation: FC<IProp> = ({ isOpen, setIsOpen }) => {
  const router = useRouter();
  const { content } = useContext(HeaderMobileContext);
  const handleNavigation = async () => {
    console.log("handleServices")
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
    <motion.ul
      variants={variants}
      className={s.nav__list}
      style={isOpen ? { display: "block" } : { display: "none" }}
    >
      <MenuItem setIsOpen={setIsOpen}>
        <button className={s.link__styles} onClick={handlerHome}>
          {content.home.title}
        </button>
      </MenuItem>
      <MenuItem setIsOpen={setIsOpen}>
        <button className={s.link__styles} onClick={handleNavigation}>
          {content.services.title}
        </button>
      </MenuItem>
      <MenuItem setIsOpen={setIsOpen}>
        <Link className={s.link__styles} href={content.aboutUs.route}>
          {content.aboutUs.title}
        </Link>
      </MenuItem>
      <MenuItem setIsOpen={setIsOpen}>
        <Link className={s.link__styles} href={content.contactUs.route}>
          {content.contactUs.title}
        </Link>
      </MenuItem>
    </motion.ul>
  );
};
