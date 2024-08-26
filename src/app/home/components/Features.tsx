import Image from "next/image";
import groupOne from "@/assets/images/groupOne.png";
import groupTwo from "@/assets/images/groupTwo.png";
import groupThree from "@/assets/images/groupThree.png";
import BgGreen from "@/assets/background/bg-gree.png";
import Section from "@/components/common/Section";

const Features = () => {
  return (
    <Section styles={{marginTop: "8rem"}}>
      <div className="flex justify-between w-full mb-30 relative">
        
        <div className="w-[60%] h-[700px]">
          <h3 className="text-[3.1rem] leading-none whitespace-pre-line">
            Desarrollamos{" "}
            <span className="bg-custom-gradient-one bg-clip-text text-transparent">
              software <br />
            </span>
            <span className="bg-custom-gradient-two bg-clip-text text-transparent">
              personalizado &nbsp;
            </span>
            para las <br />
            necesidades específicas <br />
            de{" "}
            <span className="bg-custom-gradient-three bg-clip-text text-transparent">
              tu industria.
            </span>
          </h3>
          <p className="text-lg font-futura mt-5 w-2/3 ">
            Your journey to finding the perfect property begins here. Explore
            our listings to find the home that matches your dreams.Your journey
            to finding the perfect property begins here.
          </p>
        </div>

        <Image
          src={groupOne}
          alt="trabajando en equipo"
          className="absolute w-[650px] max-w-none -right-[16.5%] -top-20 z-10"
        />
      </div>
      <div className="flex flex-row-reverse justify-between w-full mb-30 relative">
        <div className="w-[60%] flex flex-col items-end h-[700px]">
          <h3 className="text-[3.1rem] leading-none whitespace-pre-line text-right">
            Optimiza tus ventas <br /> online con
            <span className="bg-custom-gradient-four bg-clip-text text-transparent">
              {" "}
              plataformas
            </span>
            <br />
            <span className="bg-custom-gradient-five bg-clip-text text-transparent">
              robustas y seguras.
            </span>
          </h3>
          <p className="text-lg font-futura mt-5 w-2/3 text-right ">
            Your journey to finding the perfect property begins here. Explore
            our listings to find the home that matches your dreams.Your journey
            to finding the perfect property begins here.
          </p>
        </div>

        <Image
          src={groupTwo}
          alt="trabajando en equipo"
          className="absolute w-[650px] max-w-none -left-[15%] -top-24"
        />
      </div>
      <div className="flex justify-between w-full mb-30 relative">
        <div className="w-[60%] h-[700px]">
          <h3 className={`text-[3.1rem] leading-none whitespace-pre-line`}>
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
          <p className="text-lg font-futura mt-5 w-2/3">
            Your journey to finding the perfect property begins here. Explore
            our listings to find the home that matches your dreams.Your journey
            to finding the perfect property begins here.
          </p>
        </div>

        <Image
          src={groupThree}
          alt="trabajando en equipo"
          className="absolute w-[600px] max-w-none -right-[15%] -top-[20%] z-10"
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
