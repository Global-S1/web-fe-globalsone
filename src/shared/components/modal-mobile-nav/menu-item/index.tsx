import { motion } from "framer-motion";
import a from "./menu-item.module.css";
import Link from "next/link";
import { FC } from "react";

interface IProp {
  title: string;
  route: string;
}

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const MenuItem: FC<IProp> = ({ title, route }) => {
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className={a.item__container}
    >
      <Link className={a.text__link} href={route}>
        {title}
      </Link>
    </motion.li>
  );
};
