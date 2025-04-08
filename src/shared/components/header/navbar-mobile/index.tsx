"use client";
import { useRef, FC, useEffect, useContext, useState } from "react";
import { motion, sync, useCycle } from "framer-motion";
import { useDimensions } from "./use-dimensions";
import { MenuToggle } from "./menu-toggle";
import { Navigation } from "./navigation";
import s from "./modal-mobile-nav.module.css";
import { NavigationLinks } from "@/shared/interfaces/layout.interface";
import { HeaderMobileContext } from "../context/header-context";

interface Props {
  content: NavigationLinks;
}

const sidebarWidth = {
  open: {
    width: "200px",
    height: "100vh",
    transition: { duration: 0.2 },
  },
  closed: {
    width: "50px",
    height: "79px",
    transition: { duration: 0.2 },
    zIndex: "-20",
  },
};

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      delay: 0.2,
      duration: 0.8,
      type: "spring",
      stiffness: 40,
      damping: 30,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(20px at 0px 0px)",

    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export const NavBarMobile = ({ content }: Props): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  const { updateContent } = useContext(HeaderMobileContext);
  useEffect(() => {
    updateContent(content);
  }, [content]);
  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
      style={{ zIndex: "20" }}
      className={s.btn__container}
      variants={sidebarWidth}
    >
      <motion.div className={s.background} variants={sidebar} />
      <Navigation isOpen={isOpen} setIsOpen={setIsOpen} />
      <MenuToggle toggle={setIsOpen} isOpen={isOpen} />
    </motion.nav>
  );
};
