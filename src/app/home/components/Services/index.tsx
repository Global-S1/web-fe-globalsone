import { LeaveClear } from "@/assets/leavesComponents/LeaveClear";
import { LeaveBig } from "@/assets/leavesComponents/LeaveBig";
import { services } from "@/moc/service.moc";
import Section from "@/components/common/Section";
import { CardService } from "./CardService";

const Services = () => {
  return (
    <Section>
      <h2 className="text-large sm:text-title-7 md:text-title-6 lg:text-title-3 xl:text-title-1  text-center xl:mb-10 xl:w-[200%]">
        NUESTROS <br />
        PRINCIPALES SERVICIOS{" "}
      </h2>
      <div className="flex flex-col sm:flex-row space-y-14 xl:space-y-0 sm:space-x-2 md:space-x-4 xl:space-x-0 justify-between place-items-center w-full mb-[100px]  relative">
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
