import bgContac from "@/assets/background/bgContact.png";
import Section from "@/components/common/Section";

const ContactUs = () => {
  return (
    <Section styles={{marginTop: "5rem"}}>
      <div
        className="w-full flex justify-center items-center h-[600px] bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${bgContac.src})`,
        }}
      >
        <div className="flex flex-col justify-center items-center">
          <h3 className="text-[4.2rem] leading-none text-center">
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

export default ContactUs;
