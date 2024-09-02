import Image from "next/image";
import groupOne from "@/assets/images/groupOne.png";
import groupTwo from "@/assets/images/groupTwo.png";
import groupThree from "@/assets/images/groupThree.png";
import BgGreen from "@/assets/background/bg-gree.png";
import Section from "@/components/common/Section";
import { GroupOne } from "@/assets/home/ilustrarion/GrupOne";

const Features = () => {
  return (
    <Section styles={{ marginTop: "8rem" }}>
      <div className="flex justify-between w-full mb-30 relative p-[16px]">
        <div className="w-[60%] xl:w-[68%] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px]">
          <h3 className="text-tiny sm:text-base md:text-big lg:text-title-8 xl:text-title-6 leading-none whitespace-pre-line">
            Desarrollamos{" "}
            <span className="bg-gradiant-title-1 bg-clip-text text-transparent">
              software <br />
            </span>
            <span className="bg-gradiant-title-2 bg-clip-text text-transparent">
              personalizado&nbsp;
            </span>
            para las necesidades específicas <br />
            de{" "}
            <span className="bg-custom-gradient-three bg-clip-text text-transparent">
              tu industria.
            </span>
          </h3>
          <p className="text-micro sm:text-petite md:text-small lg:text-base xl:text-medium font-futura mt-5 ">
            Your journey to finding the perfect property begins here. Explore
            our listings to find the home that matches your dreams.Your journey
            to finding the perfect property begins here.
          </p>
        </div>

        <Image
          src={groupOne}
          alt="trabajando en equipo"
          className="absolute w-[189px] sm:w-[350px] md:w-[500px] lg:w-[550px] max-w-none -right-10 sm:-right-20 md:-right-32 xl:-right-40 top-7 sm:-top-10 
           xl:-top-16 z-10"
        />
        {/* <GroupOne /> */}
      </div>
      <div className="flex flex-row-reverse justify-between w-full mb-30 relative p-[16px]">
        <div className="w-[53%] xl:w-[65%] flex flex-col items-end h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px]">
          <h3 className="text-tiny sm:text-base md:text-big lg:text-title-8 xl:text-title-6 leading-none whitespace-pre-line text-right">
            Optimiza tus ventas online con
            <span className="bg-custom-gradient-four bg-clip-text text-transparent">
              {" "}
              plataformas
            </span>
            <br />
            <span className="bg-custom-gradient-five bg-clip-text text-transparent">
              robustas y seguras
            </span>
            .
          </h3>
          <p className="text-micro sm:text-petite md:text-small lg:text-base xl:text-medium font-futura mt-5 text-right ">
            Your journey to finding the perfect property begins here. Explore
            our listings to find the home that matches your dreams.Your journey
            to finding the perfect property begins here.
          </p>
        </div>

        <Image
          src={groupTwo}
          alt="trabajando en equipo"
          className="absolute w-[180px] sm:w-[350px] md:w-[500px] lg:w-[550px] max-w-none -left-8 sm:-left-20 md:-left-32 xl:-left-36 top-14 sm:-top-5 xl:-top-16"
        />
        
      </div>
      <div className="flex justify-between w-full mb-30 relative px-[16px]">
        <div className="w-[60%] xl:w-[68%] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px]">
          <h3
            className={`text-tiny sm:text-base md:text-big lg:text-title-8 xl:text-title-6 leading-none whitespace-pre-line`}
          >
            Implementa{" "}
            <span className="bg-custom-gradient-six bg-clip-text text-transparent">
              tecnología
            </span>{" "}
            <br />
            que mejora la{" "}
            <span className="bg-custom-gradient-seven bg-clip-text text-transparent">
              atención
            </span>{" "}
            y<br />
            <span className="bg-custom-gradient-eight bg-clip-text text-transparent">
              gestión
            </span>{" "}
            de tu empresa.
          </h3>
          <p className="text-micro sm:text-petite md:text-small lg:text-base xl:text-medium font-futura mt-5 ">
            Your journey to finding the perfect property begins here. Explore
            our listings to find the home that matches your dreams.Your journey
            to finding the perfect property begins here.
          </p>
        </div>

        <Image
          src={groupThree}
          alt="trabajando en equipo"
          className="absolute w-[170px] sm:w-[350px] md:w-[500px] lg:w-[550px]  max-w-none -right-7 sm:-right-20 md:-right-32 xl:-right-40 top-5 sm:-top-20 md:-top-32 xl:-top-36 z-10"
        />
        <Image
          src={BgGreen}
          alt="bg-green"
          className="absolute -right-[40%] -top-[100%] -z-10"
        />
      </div>
    </Section>
  );
};

export default Features;
