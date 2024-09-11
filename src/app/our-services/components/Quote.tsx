import { Section } from "@/components/share/section";
import VideoPlayer from "@/assets/icons/VideoPlayer";
import Ticket from "@/assets/icons/Ticket";
import CpuIcon from "@/assets/icons/CpuIcon";

const Quote = () => {
  return (
    <Section styles={{ marginTop: "6rem" }}>
      <div className="w-4/5 h-[60rem] m-auto flex flex-col justify-between">
        <div className=" h-[21rem] flex justify-between">
          <div className=" h-full border-l border-t border-b border-white px-10 rounded-tl-[12.5rem] rounded-bl-[2rem] flex flex-col justify-end">
            <h3 className="text-4xl leading-relaxed mb-4 pl-8">
              Your journey to finding the perfect property begins
            </h3>
            <p className="font-futura text-lg mb-10">
              Your journey to finding the perfect property begins here. Explore
              our listings to find the home that matches your dreams.Your
              journey to finding the perfect property begins here.{" "}
            </p>
          </div>
          <div className="relative h-full flex items-end">
            <VideoPlayer
              style={{
                width: "620",
                position: "absolute",
                top: "-44%",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            />
            <button className="bg-custom-gradian-btn-project font-futura px-6 py-2 rounded-lg mb-5 w-[180px] mx-10">
              Quiero Cotizar
            </button>
          </div>
        </div>
        <div className="border border-white">
          <Ticket />
        </div>
        <div className="border border-white">
          <CpuIcon />
        </div>
      </div>
    </Section>
  );
};

export default Quote;
