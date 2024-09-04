import { GlobalSLogo } from "@/assets/GlobalSLogo";
import { ButtonFacebook } from "@/assets/icons/BtnFacebook";
import { BtnLinkedin } from "@/assets/icons/BtnLinkedin";
import { BtnX } from "@/assets/icons/BtnX";
import { BtnYoutube } from "@/assets/icons/BtnYoutube";
import { SendIcon } from "@/assets/icons/SendIcon";
import { FC } from "react";

interface IColIndex {
  title: string;
  links: string[];
}

const DataColIndex: IColIndex[] = [
  {
    title: "Home",
    links: ["Hero Section", "Features", "Properties", "Testimonials", "FAQ’s"],
  },
  {
    title: "About Us",
    links: [
      "Our Story",
      "Our Works",
      "How It Works",
      "Our Team",
      "Our Clients",
    ],
  },
  {
    title: "Properties",
    links: ["Portfolio", "Categories"],
  },
  {
    title: "Service",
    links: [
      "Valuation Mastery",
      "Strategic Marketing",
      "Negotiation Wizardry",
      "Closing Success",
      "Property Management",
    ],
  },
  {
    title: "Contact Us",
    links: ["Address", "Phone", "Email"],
  },
];

const socialmedia = [ButtonFacebook, BtnLinkedin, BtnX, BtnYoutube];

const ColIndex: FC<IColIndex> = ({ title, links }) => {
  return (
    <div className="text-left h-[232px] flex flex-col space-y-4">
      <h3 className="mb-5 ">{title}</h3>
      {links.map((link, index) => (
        <p key={index} className="font-futura">
          {link}
        </p>
      ))}
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="text-center w-full max-w-none bg-[#150D45] sm:!bg-transparent">
      <div className="p-4 flex flex-col sm:flex-row justify-start sm:justify-center items-center  h-[392px]">
        <div className="flex flex-col sm:mt-12 sm:mr-20">
          <GlobalSLogo w="190" h="42" style={{ marginBottom: "0.5rem" }} />
          <div className="flex justify-center items-center border border-white w-fit py-2 px-3 rounded-lg">
            <input
              type="text"
              className="bg-transparent border-none"
              placeholder="Enter Your Email"
            />
            <button>
              <SendIcon />
            </button>
          </div>
        </div>
        <div className="text-micro text-left font-futura text-[#999999] sm:hidden grid grid-cols-2 mt-5 w-[85%] h-[92px]">
          <p>Inicio</p>
          <p>Acerca de nosotros</p>
          <p>Proyectos</p>
          <p>Servicios</p>
          <p>Contactanos</p>
        </div>
        <div className="items-center text-sm space-x-10 hidden sm:flex">
          {DataColIndex.map((col, index) => (
            <ColIndex key={index} title={col.title} links={col.links} />
          ))}
        </div>
      </div>
      <div className="w-full flex justify-between items-center p-2 container max-w-[1200px] mx-auto px-4 sm:px-0">
        <div className="flex sm:space-x-16 text-[8px] sm:text-sm">
          <h4>@2023 Global. All Rights Reserved.</h4>
          <h4>Terms & Conditions</h4>
        </div>
        <div className="flex space-x-1 sm:space-x-3">
          {socialmedia.map((Item, index) => (
            <div key={index} className="w-[24px] sm:w-[40px]">
              <Item  />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
