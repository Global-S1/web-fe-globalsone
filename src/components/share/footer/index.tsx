import { GlobalSLogo } from "@/assets/GlobalSLogo";
import { ButtonFacebook } from "@/assets/icons/BtnFacebook";
import { BtnLinkedin } from "@/assets/icons/BtnLinkedin";
import { SendIcon } from "@/assets/icons/SendIcon";
import { Instagram } from "@/assets/footer/icons/instagram";
import s from "./footer.module.css";
import { ColIndex } from "./footer-col-index";
import { LogoMobile } from "@/assets/header/pictures/LogoMobile";

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

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.footer_menu_container}>
        <div className={s.footer_search_container}>
          <div className={s.logo_desk}>
            <GlobalSLogo w="190" h="42" />
          </div>
          <div className={s.logo_mobile}>
            <LogoMobile />
          </div>
          <div className={s.input_container}>
            <input type="text" placeholder="Enter Your Email" />
            <button type="submit">
              <SendIcon />
            </button>
          </div>
        </div>

        <div className={s.footer_linklist_container}>
          <div className={s.mobile_menu}>
            <p>Inicio</p>
            <p>Acerca de nosotros</p>
            <p>Proyectos</p>
            <p>Servicios</p>
            <p>Contactanos</p>
          </div>
          <div className={s.desk_menu}>
            {DataColIndex.map((col, index) => (
              <ColIndex key={index} title={col.title} links={col.links} />
            ))}
          </div>
        </div>
      </div>

      <div className={s.footer_terms_container}>
        <div>
          <div className={s.social_text_container}>
            <h4>@2023 Global. All Rights Reserved.</h4>
            <h4>Terms & Conditions</h4>
          </div>
          <div className={s.social_icons_container}>
            {socialmedia.map((Item, index) => (
              <div key={index} className={s.social_media_icon}>
                <Item />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
