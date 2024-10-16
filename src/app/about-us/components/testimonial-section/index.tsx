import { Testimonials } from "@/app/home/components/testimonials";
import { Section } from "@/shared/components/section";
import { TestimonialCard } from "@/shared/components/testimonial-card";
import { getTestimonials } from "@/shared/components/testimonial-card/services/testimonials.service";
import { FC } from "react";
interface Props {
  content: {
    title: string;
  };
}
import s from "./testimonial-section.module.css"

export const TestimonialSection: FC<Props> = async ({ content }) => {
  const testimonial = await getTestimonials();
  return (
    <Section extendStyle={s.testimonial__section}>
      <div className={s.title_container}>
        <h2>{content.title}</h2>
      </div>
      <TestimonialCard content={testimonial} />
    </Section>
  );
};
