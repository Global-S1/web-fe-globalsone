import { GlobalSLogo } from "@/assets/GlobalSLogo";
import Link from "next/link";
import Image from "next/image";
import GlobalS1 from "@/assets/GloblaS1.png";
import { Burger } from "@/assets/icons/Burger";
import { useEffect } from "react";
import { BurgerBtn } from "./BurgerMenu";

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

const HeaderMobile = () => {
  return (
    <header
      className="flex justify-center h-[79px] w-full md:hidden"
      style={{
        background:
          "linear-gradient(180deg, #1A0258 0%, rgba(87, 62, 151, 0.00) 100%)",
      }}
    >
      <div className="relative w-full flex justify-center items-center">
        <Image
          src={GlobalS1}
          width={141}
          height={29}
          alt="GlobalS1"
          className="h-[29px] w-[141px]"
        />

        {/* <input type="checkbox" id="burger-checkbox" className="peer hidden" />

        <label
          htmlFor="burger-checkbox"
          className="cursor-pointer absolute right-[21px] top-[27px] z-50"
        >
          <Burger />
        </label>

        <nav className="fixed top-0 left-0 w-full z-40 hidden peer-checked:block bg-purple-300 h-[100vh] text-right">
          <ul className="flex flex-col space-y-10">
            {links.map((link, index) => (
              <li key={index} className="text-sm">
                <Link href={link.path}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav> */}

        <BurgerBtn />
      </div>
    </header>
  );
};

export default HeaderMobile;
