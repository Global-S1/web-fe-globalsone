import { Section } from "@/components/share/section";
import { TestimonialCard } from "@/components/share/testimonial-card";
import { ClinetDaTA } from "@/moc/testimonial.moc";
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
