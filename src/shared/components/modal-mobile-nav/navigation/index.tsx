"use client";
import { motion } from "framer-motion";
import { MenuItem } from "../menu-item";
import s from "./navigation.module.css";
import { HeaderMobileContext } from "../../header-mobile/context/header-context";
import { FC, useContext } from "react";

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
}

export const Navigation: FC<IProp> = ({ isOpen }) => {
  const { content } = useContext(HeaderMobileContext);
  return (
    <motion.ul
      variants={variants}
      className={s.nav__list}
      style={isOpen ? { display: "block" } : { display: "none" }}
    >
      {Object.entries(content).map(([key, value]) => {
        return <MenuItem {...value} key={key} />;
      })}
    </motion.ul>
  );
};
