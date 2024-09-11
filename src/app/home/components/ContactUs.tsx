import bgContac from "@/assets/background/bgContact.png";
import { Pice1 } from "@/assets/home/icons/Pice";
import { Section } from "@/components/share/section";

export const ContactUs = () => {
  return (
    <Section>
      <div
        className="w-full flex justify-center items-center h-[600px] bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${bgContac.src})`,
        }}
      >
        <div className="flex flex-col justify-center items-center">
          <h3 className="text-large xl:text-title-3 leading-none text-center">
            ¿Listo para <br />
            transformar <br />
            tu negocio?
          </h3>
          <button className="bg-custom-gradian-btn-project py-2 px-14 rounded-xl font-futura mt-6">
            Contáctanos Ahora
          </button>
        </div>
      </div>
    </Section>
  );
};
