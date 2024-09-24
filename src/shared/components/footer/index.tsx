import { GlobalSLogo } from "@/assets/GlobalSLogo";
import { ButtonFacebook } from "@/assets/icons/BtnFacebook";
import { BtnLinkedin } from "@/assets/icons/BtnLinkedin";
import { SendIcon } from "@/assets/icons/SendIcon";
import { Instagram } from "@/assets/footer/icons/instagram";
import s from "./footer.module.css";
import { ColIndex } from "./footer-col-index";
import { LogoMobile } from "@/assets/header/pictures/LogoMobile";
import res from "@/data-mock/footerRoutes.json"

const socialmedia = [ButtonFacebook, BtnLinkedin, Instagram];

export const Footer = () => {
  console.log(res)
  return (
    <footer className={s.footer}>
      <div className={s.footer_menu_container}>
        <div className={s.footer_search_container}>
          <div className={s.logo_desk}>
            <GlobalSLogo  />
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
            {res.data.map((col, index) => (
              <ColIndex key={index} title={col.title}/>
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
