import { Section } from "@/shared/components/section";
import s from "./contact-us.module.css";
import { FC } from "react";
import { RedirectBtn } from "@/shared/components/redirect-btn";
import Image from "next/image";
import leftPictur from "@/assets/home/contact-us/pictures/picture_rleft.png";
import rightPicture from "@/assets/home/contact-us/pictures/picture_right.png";
import topPicture from "@/assets/home/contact-us/pictures/picture_top.png";
import bottomPicture from "@/assets/home/contact-us/pictures/picture_bottom.png";
import bottomPictureMobile from "@/assets/home/contact-us/pictures/pinture_bottom_mobile.png";
interface Prop {
  content: string;
}
export const ContactUs: FC<Prop> = ({ content }) => {
  return (
    <Section extendStyle={s.contacUs__section}>
      <Image src={leftPictur} alt="dashboard" className={s.left__image} />
      <Image src={rightPicture} alt="dashboard" className={s.right__image} />
      <div className={s.canva_container}>
        <Image src={topPicture} alt="dashboard" className={s.top__image} />
      </div>
      <div className={s.text_container}>
        <h3 dangerouslySetInnerHTML={{ __html: content }} />
        <RedirectBtn route="/contact-us" text="Contáctanos Ahora" />
      </div>
      <div className={s.purple_circle}></div>
      <div className={s.purple_rec_top}></div>
      <div className={s.purple_rec}></div>
      <div className={s.purple_rec_vertical}></div>
      <div className={s.green_circle}></div>
      <Image src={bottomPicture} alt="dashboard" className={s.bottom__image} />
      <Image src={bottomPictureMobile} alt="dashboard" className={s.bottom__image__mobile} />
      <div className={s.purple_rec_bottom_desk}></div>
    </Section>
  );
};
