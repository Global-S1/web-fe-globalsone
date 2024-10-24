import { ModalWindow } from "../modal-window";
import s from "./thanks-modal.module.css";
import { Facebook } from "@/assets/about-us/hero/icons/Facebook";
import { Linkedin } from "@/assets/about-us/hero/icons/Linkedin";
import { Instagram } from "@/assets/about-us/hero/icons/Instagram";
import { RedirectBtn } from "../redirect-btn";

export const ThanksModal = ({
  title,
  description,
  socialMedia,
}: ISuccessContent) => {
  return (
    <ModalWindow active color={"#1a2660"}>
      <div className={s.message__container}>
        <h2>{title}</h2>
        <p>{description}</p>
        <RedirectBtn route={"/"} text={"Ver Nuestros Proyectos"} />
        <span>{socialMedia.title}</span>
        <div className={s.icons__container}>
          <a href={socialMedia.facebook} target="__blank">
            <Facebook />
          </a>
          <a href={socialMedia.linkedin} target="_blank">
            <Linkedin />
          </a>
          <a href={socialMedia.instagram} target="_blank">
            <Instagram />
          </a>
        </div>
      </div>
    </ModalWindow>
  );
};
