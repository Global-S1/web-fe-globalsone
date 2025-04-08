import { motion } from "framer-motion";
import s from "./menu-item.module.css";
import { ReactNode } from "react";

interface IProps {
  setIsOpen: (value: boolean) => void;
  children?: ReactNode;
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

export const MenuItem = ({ setIsOpen, children }: IProps): JSX.Element => {
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className={s.item__container}
      onClick={() => setIsOpen(false)}
    >
      {children}
    </motion.li>
  );
};
