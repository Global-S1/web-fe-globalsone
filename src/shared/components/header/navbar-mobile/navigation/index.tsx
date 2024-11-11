"use client";
import { motion } from "framer-motion";
import { MenuItem } from "../menu-item";
import s from "./navigation.module.css";
import { HeaderMobileContext } from "../../context/header-context";
import { FC, useContext } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ROOT_PATH } from "@/shared/constants/url";

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
        <button className={s.link__styles} onClick={handleServices}>
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
