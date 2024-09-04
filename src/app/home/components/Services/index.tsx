import { LeaveClear } from "@/assets/leavesComponents/LeaveClear";
import { LeaveBig } from "@/assets/leavesComponents/LeaveBig";
import { services } from "@/moc/service.moc";
import Section from "@/components/common/Section";
import { CardService } from "./CardService";

const Services = () => {
  return (
    <Section styles="mb-[90px] sm:mb-[200px]">
      <h2 className="text-large sm:text-title-8 md:text-title-7 lg:text-title-4 xl:text-title-1  text-center xl:mb-10 xl:w-[200%] mb-9">
        NUESTROS <br />
        PRINCIPALES SERVICIOS{" "}
      </h2>
      <div className="flex flex-col sm:flex-row space-y-9 sm:space-y-0 xl:space-y-0 sm:space-x-2 md:space-x-4 xl:space-x-0 justify-between place-items-center w-full mb-[100px]  relative">
        {/* <LeaveClear
          style={{ position: "absolute", top: "-9%", right: "-3%" }}
        /> */}
        {services.map((service, index) => (
          <CardService
            key={index}
            title={service.title}
            content={service.content}
          >
            <service.icon />
          </CardService>
        ))}
        {/* <LeaveBig
          style={{ position: "absolute", bottom: "-30%", left: "-5%" }}
        /> */}
      </div>
    </Section>
  );
};

export default Services;
