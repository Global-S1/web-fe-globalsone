import { BgLeave } from "@/components/BgLeave";
import { Hero } from "./components/Hero";
import { Values } from "./components/Values";
import { Testimonials } from "../home/components/testimonials";
import { OurTeam } from "@/components/share/our-team";

export default function AboutUs() {
  return (
    <>
      <BgLeave />
      <Hero />
      <Values />
      {/* <Steps /> */}
      <OurTeam />
      <Testimonials />
    </>
  );
}
