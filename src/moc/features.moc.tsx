import { IFeatures } from "@/interfaces/IFeatures";
import groupOne from "@/assets/images/groupOne.png";
import groupTwo from "@/assets/images/groupTwo.png";
import groupThree from "@/assets/images/groupThree.png";
import BgGreen from "@/assets/background/bg-gree.png";

export const featureData: IFeatures[] = [
  {
    title: (
      <>
        Desarrollamos{" "}
        <span className="bg-gradiant-title-1 bg-clip-text text-transparent">
          software <br />
        </span>
        <span className="bg-gradiant-title-2 bg-clip-text text-transparent">
          personalizado &nbsp;
        </span>
        para las necesidades específicas <br />
        de{" "}
        <span className="bg-custom-gradient-three bg-clip-text text-transparent">
          tu industria.
        </span>
      </>
    ),
    content:
      "homeYour journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.Your journey to finding the perfect property begins here. ",
    left: true,
    img: groupOne,
  },
  {
    title: (
      <>
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
      </>
    ),
    content:
      "homeYour journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.Your journey to finding the perfect property begins here. ",
    right: true,
    img: groupTwo
  },
  {
    title: (
      <>
        Implementa{" "}
        <span className="bg-custom-gradient-six bg-clip-text text-transparent">
          tecnología
        </span>{" "}
        <br />
        que mejora la{" "}
        <span className="bg-custom-gradient-seven bg-clip-text text-transparent">
          atención
        </span>{" "}
        y
        <br />
        <span className="bg-custom-gradient-eight bg-clip-text text-transparent">
          gestión
        </span>{" "}
        de tu empresa.
      </>
    ),
    content:
      "homeYour journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.Your journey to finding the perfect property begins here. ",
    left: true  ,
    img: groupThree
  },
];
