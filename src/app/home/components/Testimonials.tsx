import Section from "@/components/common/Section";
import { TestimonialCard } from "@/components/common/TestimonialCard";
import { ClinetDaTA } from "@/moc/testimonial.moc";

export const Testimonials = () => {
  return (
    <Section styles="mb-[40px] sm:mb-[280px] ">
      <div className="flex flex-col xl:flex-row justify-between items-center w-full mb-10">
        <h2 className="text-center text-base xl:text-title-9 mb-5 xl:mb-0">
          LO QUE DICEN NUESTROS CLIENTES
        </h2>
        <button className="bg-[#D9D9D95E] border border-white rounded-lg text-sm px-5 h-[40px]">
          Ver todos los testimonios
        </button>
      </div>
      <TestimonialCard {...ClinetDaTA} />
    </Section>
  );
};
