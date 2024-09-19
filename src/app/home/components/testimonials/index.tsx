import { Section } from "@/shared/components/section";
import { TestimonialCard } from "@/shared/components/testimonial-card";
import { ClinetDaTA } from "@/data-mock/testimonial.moc";
import s from "./testimonials.module.css"

export const Testimonials = () => {
  return (
    <Section>
      <div className={s.title_container}>
        <h2>
          LO QUE DICEN NUESTROS CLIENTES
        </h2>
        <button className={s.button}>
          Ver todos los testimonios
        </button>
      </div>
      <TestimonialCard {...ClinetDaTA} />
    </Section>
  );
};
