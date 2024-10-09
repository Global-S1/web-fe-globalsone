import { Section } from "@/shared/components/section";
import { TestimonialCard } from "@/shared/components/testimonial-card";
import { ClinetDaTA } from "@/data-mock/testimonial.moc";
import s from "./testimonials.module.css";

interface Props {
  content: {
    title: string;
  };
}

export const Testimonials = ({ content }: Props) => {
  return (
    <Section extendStyle={s.testimonial__section}>
      <div className={s.title_container}>
        <h2>{content.title}</h2>
      </div>
      <TestimonialCard {...ClinetDaTA} />
    </Section>
  );
};
