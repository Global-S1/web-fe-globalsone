import { GlobalSLogo } from "@/assets/GlobalSLogo";
import { ButtonFacebook } from "@/assets/icons/BtnFacebook";
import { BtnLinkedin } from "@/assets/icons/BtnLinkedin";
import { BtnX } from "@/assets/icons/BtnX";
import { BtnYoutube } from "@/assets/icons/BtnYoutube";
import { SendIcon } from "@/assets/icons/SendIcon";
import { Instagram } from "@/assets/footer/icons/instagram";
import { FC } from "react";
import s from "./footer.module.css";
import { ColIndex } from "./footer-col-index";

interface IColIndex {
  title: string;
  links: string[];
}

const DataColIndex: IColIndex[] = [
  {
    title: "Home",
    links: ["Hero Section", "Features", "Properties", "Testimonials", "FAQ’s"],
  },
  {
    title: "About Us",
    links: [
      "Our Story",
      "Our Works",
      "How It Works",
      "Our Team",
      "Our Clients",
    ],
  },
  {
    title: "Properties",
    links: ["Portfolio", "Categories"],
  },
  {
    title: "Service",
    links: [
      "Valuation Mastery",
      "Strategic Marketing",
      "Negotiation Wizardry",
      "Closing Success",
      "Property Management",
    ],
  },
  {
    title: "Contact Us",
    links: ["Address", "Phone", "Email"],
  },
];

const socialmedia = [ButtonFacebook, BtnLinkedin, Instagram];

// const ColIndex: FC<IColIndex> = ({ title, links }) => {
//   return (
//     <div className="text-left h-[232px] flex flex-col space-y-4">
//       <h3 className="mb-5 text-[16rem]">{title}</h3>
//       {links.map((link, index) => (
//         <p key={index} className="font-futura">
//           {link}
//         </p>
//       ))}
//     </div>
//   );
// };

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.footer_container}>
        <div className={s.footer_search_container}>
          <GlobalSLogo w="190" h="42" />
          <div className={s.input_container}>
            <input
              type="text"
              className="bg-transparent border-none"
              placeholder="Enter Your Email"
            />
            <button type="submit">
              <SendIcon />
            </button>
          </div>
        </div>

        <div className={s.footer_menu_container}>
          {/* <div 
          className="text-micro text-left font-futura text-[#999999] sm:hidden grid grid-cols-2 mt-5 w-[85%] h-[92px]">
            <p>Inicio</p>
            <p>Acerca de nosotros</p>
            <p>Proyectos</p>
            <p>Servicios</p>
            <p>Contactanos</p>
          </div> */}
          <div className={s.desk_menu}>
            {DataColIndex.map((col, index) => (
              <ColIndex key={index} title={col.title} links={col.links} />
            ))}
          </div>
        </div>
      </div>

      <div className={s.social_media_container}>
        <div className={s.social_text_container}>
          <h4>@2023 Global. All Rights Reserved.</h4>
          <h4>Terms & Conditions</h4>
        </div>
        <div className={s.social_icons_container}>
          {socialmedia.map((Item, index) => (
            <div key={index} className="w-[24px] sm:w-[40px]">
              <Item />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
