import { Section } from "@/shared/components/section";
import { TestimonialCard } from "@/shared/components/testimonial-card";
import s from "./testimonials.module.css";
import { getTestimonials } from "@/shared/components/testimonial-card/services/testimonials.service";

interface Props {
  content: {
    title: string;
  };
}

export const Testimonials = async ({ content }: Props) => {
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
