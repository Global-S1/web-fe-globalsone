import Link from "next/link";
import { GlobalSLogo } from "@/assets/GlobalSLogo";

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
];

const Header = () => {
  return (
    <header
      className=" absolute z-50 w-full font-futura"
      style={{
        background:
          "linear-gradient(180deg, rgba(26, 2, 88, 1) 0%, rgba(87, 62, 151, 0) 100%)",
      }}
    >
      <div className="max-w-[1200px] relative mx-auto">
        <div className="h-[80px] relative flex justify-between items-center">
          <nav>
            <ul className="flex space-x-7">
              {links.map((link, index) => (
                <li key={index} className="text-sm">
                  <Link href={link.path}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <GlobalSLogo
            w="192"
            h="40"
            style={{
              position: "absolute",
              top: "26%",
              left: "52%",
              transform: "translateX(-50%)",
            }}
          />
          <nav>
            <ul>
              <li className="text-sm">
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
