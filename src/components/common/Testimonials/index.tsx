import Image from "next/image";
import Gian from "@/assets/images/giancarlos.png";
import BgTestimonial from "@/assets/background/bg-testimonial.png";
import Code from "@/assets/images/code.png";
import Palette from "@/assets/images/palette.png";
import Desk from "@/assets/images/desk.png";
import Planing from "@/assets/images/planing.png";
import Meeting from "@/assets/images/meeting.png";
import Section from "@/components/common/Section";
import Star from "@/assets/icons/Star";

const Stars = ({ numStars }) => {
  const starsArray = Array(numStars).fill(0);

  return (
    <div className="flex space-x-1 xl:space-x-5 xl:mt-3 xl:mb-10">
      {starsArray.map((_, index) => (
        <div key={index} className="min-w-0 w-[11.33px] h-[11.54px] xl:w-10">
          <Star />
        </div>
      ))}
    </div>
  );
};

const ClinetDaTA = {
  name: "Gianvictor Cueva",
  starts: 5,
  content:
    "Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.Your journey to finding the perfect property begins here.",
  clientImg: "",
  stuff: [
    {
      img: Desk,
      alt: "Diseño",
    },
    {
      img: Code,
      alt: "Desarrollo de codigo",
    },
    {
      img: Palette,
      alt: "Paleta de colores",
    },
    {
      img: Planing,
      alt: "Planificacion",
    },
    {
      img: Meeting,
      alt: "Reuniones",
    },
  ],
};

const clientList = [ClinetDaTA];

const GridStuff = () => {
  return (
    <div className="grid h-full xl:grid-cols-3 gap-1 pr-2">
      {ClinetDaTA.stuff.map((stuff, index) => (
        <div key={index} className="flex justify-center items-center">
          <Image src={stuff.img} alt={stuff.alt} className="w-40 " />
        </div>
      ))}
    </div>
  );
};

const TestimonialCard = ({ name, start, content, clientImg, stuff }) => {
  return (
    <div
      className="flex items-center bg-cover w-full rounded-[40px] h-[313px] xl:h-[612px]"
      style={{ backgroundImage: `url(${BgTestimonial.src})` }}
    >
      <div className="pl-9 xl:pl-16">
        <h2 className="text-large xl:text-title-2 leading-[25.75px] xl:leading-[89.76px]">
          {name}
        </h2>
        <Stars numStars={5} />

        <button className="bg-custom-gradian-btn-project w-[117.03px] h-[22.84px]  xl:w-[191px] xl:h-[44.8px] rounded-md mt-4 font-futura] text-[13px] xl:text-[21px] mb-5">
          Ver Porjecto
        </button>
        <p className="text-nano xl:text-medium leading-[15px] sm:leading-[18px] md:leading-[22px] lg:leading-[28px] xl:leading-[33px] max-w-[470px] font-futura  w-[60%]">
          {content}
        </p>
      </div>
      <div className="relative">
        <Image
          src={Gian}
          alt="Testimonio de nuestro cliente"
          className="absolute -top-24 left-[67%] transform -translate-x-[67%]"
        />
        <GridStuff />
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <Section styles={{ marginTop: "8rem" }}>
      <div className="flex flex-col xl:flex-row justify-between items-center w-full mb-10">
        <h2 className="text-center text-base xl:text-title-8 mb-5 xl:mb-0">
          LO QUE DICEN NUESTROS CLIENTES
        </h2>
        <button className="bg-[#D9D9D95E] border border-white rounded-lg text-sm px-5 h-[40px]">
          Ver todos los testimonios
        </button>
      </div>
      {clientList.map((client, index) => (
        <TestimonialCard key={index} {...client} />
      ))}
    </Section>
  );
};
export default Testimonials;
