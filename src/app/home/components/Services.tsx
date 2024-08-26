import { FC } from "react";
import { LeaveClear } from "@/assets/leavesComponents/LeaveClear";
import { LeaveBig } from "@/assets/leavesComponents/LeaveBig";
import { services } from "@/moc/service.moc";
import Section from "@/components/common/Section";

interface IService {
  title: string;
  content: string;
  children: React.ReactNode;
}

const CardService: FC<IService> = ({ title, content, children }) => {
  return (
    <div className="bg-card-service border-t-[0.5px] border-t-[#999999] h-[447px] w-[320px] rounded-[40px] flex flex-col justify-start items-center">
      {children}
      <div className="flex flex-col justify-center items-center text-center">
        <h3 className="text-inside-green text-xl mb-5">{title}</h3>
        <p className="font-futura text-base w-4/5">{content}</p>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <Section>
      <h2 className="text-[5.02rem] text-center mb-10">
        NUESTROS <br />
        PRINCIPALES SERVICIOS{" "}
      </h2>
      <div className="flex justify-between place-items-center w-full mb-[100px] relative">
        <LeaveClear
          style={{ position: "absolute", top: "-9%", right: "-3%" }}
        />
        {services.map((service, index) => (
          <CardService
            key={index}
            title={service.title}
            content={service.content}
          >
            <service.icon />
          </CardService>
        ))}
        <LeaveBig
          style={{ position: "absolute", bottom: "-30%", left: "-5%" }}
        />
      </div>
    </Section>
  );
};

export default Services;
