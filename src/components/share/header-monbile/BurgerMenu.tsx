"use client";

import { useState } from "react";
import Link from "next/link";
import clsx from "clsx";

const links = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "About Us",
    path: "/about",
  },
  {
    label: "Properties",
    path: "/projects",
  },
  {
    label: "Services",
    path: "/services",
  },
  {
    label: "Contact Us",
    path: "/contact",
  },
];

export const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="absolute right-3 burger-menu border border-white">
      <button onClick={toggleMenu} className="burger-button text-big">
        ☰
      </button>
      <nav className={ clsx(`${isOpen ? "flex absolute top-30 -right-3 bg-blue-600 w-[100vw]" : "hidden"} `) }>
        <ul className="">
          {links.map((link, index) => (
            <li key={index} className="">
              <Link href={link.path}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
