import { GlobalSLogo } from "@/assets/GlobalSLogo";
import { BtnFacebook } from "@/assets/social-media/icons/BtnFacebook";
import { BtnLinkedin } from "@/assets/social-media/icons/BtnLinkedin";
import { SendIcon } from "@/assets/footer/icons/SendIcon";
import { BtnInstagram } from "@/assets/social-media/icons/instagram";
import s from "./footer.module.css";
import { ColIndex } from "./footer-col-index";
import { LogoMobile } from "@/assets/header/pictures/LogoMobile";
import res from "@/data-mock/footerRoutes.json";
import Link from "next/link";

const socialmedia = [BtnFacebook, BtnLinkedin, BtnInstagram];

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.footer__menu__container}>
        <div className={s.footer__search__container}>
          <div className={s.logo__desk}>
            <GlobalSLogo />
          </div>
          <div className={s.logo__mobile}>
            <LogoMobile />
          </div>
          <div className={s.input__container}>
            <input type="text" placeholder="Enter Your Email" />
            <button type="submit">
              <SendIcon />
            </button>
          </div>
        </div>

        <div className={s.footer__linklist__container}>
          <div className={s.mobile__menu}>
            <p>Inicio</p>
            <p>Acerca de nosotros</p>
            <p>Proyectos</p>
            <p>Servicios</p>
            <p>Contactanos</p>
          </div>
          <div className={s.desk__menu}>
            {res.data.map((col, index) => (
              <ColIndex key={index} title={col.title} link={col.link}/>
            ))}
          </div>
        </div>
      </div>

      <div className={s.footer__terms__container}>
        <div>
          <div className={s.social__text__container}>
            <h4>@2023 Global. All Rights Reserved.</h4>
            <Link href="/terms-conditions">
            <h4>Terms & Conditions</h4>
            </Link>
          </div>
          <div className={s.social__icons__container}>
            {socialmedia.map((Item, index) => (
              <div key={index} className={s.social__media__icon}>
                <Item />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
