import Image from "next/image";
import BgTestimonial from "@/assets/home/testimonials/background/bg-testimonial.png";
import { Stars } from "./stars/Stars";
import { MosaicImages } from "./stars/mosaic-images";
import { FC } from "react";
import s from "./testimonial-card.module.css";
import { ITestimonialsContent } from "./interfaces/content.interface";

interface ITestimonial {
  content: ITestimonialsContent;
}

export const TestimonialCard: FC<ITestimonial> = ({ content }) => {
  const { bgImg, clientImage, description, name } = content;
  return (
    <div
      className={s.testimonialCard__container}
      style={{ backgroundImage: `url(${BgTestimonial.src})` }}
    >
      <div className={s.green__circle__top}></div>
      <div className={s.bg__layer}></div>

      <div className={s.testimonialCard__text__container}>
        <div className={s.testimonialCard__text__name}>
          <h2 dangerouslySetInnerHTML={{ __html: name }} />
          <Stars numStars={5} />
        </div>
        <p>{description}</p>
      </div>

      <Image
        src={clientImage}
        alt={name}
        className={s.client__img}
        width={100}
        height={100}
      />

      <MosaicImages pictures={bgImg} />

      <div className={s.green__mini__circle}></div>
      <div className={s.green__circle}></div>
      <div className={s.purple__circle}></div>
    </div>
  );
};
