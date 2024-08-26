import Image from "next/image";
import Start from "@/assets/icons/Start";
import Gian from "@/assets/images/giancarlos.png";
import BgTestimonial from "@/assets/background/bg-testimonial.png";
import Code from "@/assets/images/code.png";
import Palette from "@/assets/images/palette.png";
import Desk from "@/assets/images/desk.png";
import Planing from "@/assets/images/planing.png";
import Meeting from "@/assets/images/meeting.png";
import Section from "@/components/common/Section";

const Testimonials = () => {
  return (
    <Section styles={{ marginTop: "8rem" }}>
      <div className="flex justify-between items-center w-full mb-10">
        <h2 className="text-[2.3rem]">LO QUE DICEN NUESTROS CLIENTES</h2>
        <button className="bg-[#D9D9D95E] border border-white rounded-lg text-sm px-5 h-[40px]">
          Ver todos los testimonios
        </button>
      </div>
      <div
        className="bg-cover w-full rounded-[40px] h-[612px]"
        style={{ backgroundImage: `url(${BgTestimonial.src})` }}
      >
        <div className="relative w-full h-full bg-[#ffffff17] rounded-[40px] max-w-none flex justify-between items-center">
          <div className="w-1/2 ml-20">
            <h3 className="text-[5.5rem] leading-none bg-custom-client-gradian-title bg-clip-text text-transparent">
              Gianvictor Cueva
            </h3>
            <div className="flex space-x-5 mt-3 mb-10">
              <Start />
              <Start />
              <Start />
              <Start />
              <Start />
            </div>
            <p className="max-w-[470px] font-futura text-lg">
              Your journey to finding the perfect property begins here. Explore
              our listings to find the home that matches your dreams.Your
              journey to finding the perfect property begins here.{" "}
            </p>
            <button className="bg-custom-gradian-btn-project w-[191px] h-[44.8px] rounded-md mt-4 font-futura ">
              Ver proyecto
            </button>
          </div>
          <Image
            src={Gian}
            alt="Testimonio de nuestro cliente"
            className="absolute -top-24 left-[67%] transform -translate-x-[67%]"
          />
          <div className="grid grid-cols-6 grid-rows-12 gap-x-3 gap-y-0 h-5/6 max-w-[420px]">
            <Image
              src={Palette}
              alt="Diseño"
              className="col-start-1 col-end-4 row-start-2 row-end-3"
            />
            <Image
              src={Code}
              alt="Desarrollo de codigo"
              className="col-start-4 col-end-7"
            />
            <Image
              src={Desk}
              alt="las mejores herramientas"
              className="col-start-1 col-end-4 row-start-5 mt-5 "
            />
            <Image
              src={Planing}
              alt="Planificacion"
              className="col-start-4 col-end-7 row-start-4 mt-5"
            />
            <Image
              src={Meeting}
              alt="Comunicacion efectiva"
              className="col-start-3 col-end-7 row-start-9"
            />
          </div>
        </div>
      </div>
    </Section>
  );
};
export default Testimonials;
