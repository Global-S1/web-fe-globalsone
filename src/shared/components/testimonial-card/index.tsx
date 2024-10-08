import Image from "next/image";
import BgTestimonial from "@/assets/home/testimonials/background/bg-testimonial.png";
import { Stars } from "./stars/Stars";
import { MosaicImages } from "./stars/mosaic-images";
import { FC } from "react";
import { ActionButton } from "../action-button";
import s from "./testimonial-card.module.css";
import gian from "@/assets/home/testimonials/pictures/gianvictor.png";

interface ITestimonial {
  name: string;
  content: string;
}

export const TestimonialCard: FC<ITestimonial> = ({ name, content }) => {
  return (
    <div
      className={s.testimonialCard__container}
      style={{ backgroundImage: `url(${BgTestimonial.src})` }}
    >
      <div className={s.testimonialCard__text__container}>
        <div className={s.testimonialCard__text__name}>
          <h2>{name}</h2>
          <Stars numStars={5} />
        </div>
        <p>{content}</p>
      </div>
      <Image src={gian} alt="gian" className={s.client__img} />
      <MosaicImages />
    </div>
  );
};
