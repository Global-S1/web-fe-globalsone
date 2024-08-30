import { GlobalSLogo } from "@/assets/GlobalSLogo";
import Link from "next/link";
import "./HeaderMobile.css";
import Image from "next/image";
import GlobalS1 from "@/assets/GloblaS1.png";
import { Burger } from "@/assets/icons/Burger";

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
      <div className="relative w-full flex justify-center items-center ">
        <Image
          src={GlobalS1}
          width={141}
          height={29}
          alt="GlobalS1"
          className="h-[29px] w-[141px]"
        />
        <Burger style={{position: "absolute", right: "21px", top: "27px", }}/>
      </div>
      {/* stroke-width */}
      {/* <aside className="sidebar flex items-center">
        <nav className="text-black">
          <ul className="flex flex-col space-y-10">
            {links.map((link, index) => (
              <li key={index} className="text-sm">
                <Link href={link.path}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside> */}
    </header>
  );
};

export default HeaderMobile;
