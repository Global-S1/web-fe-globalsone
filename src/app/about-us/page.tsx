import { BgLeave } from "@/components/BgLeave";
import { OurTeam } from "@/components/share/ourTeam";
// import Testimonials from "../../components/common/TestimonialCard";
import Hero from "./components/Hero";
import Steps from "./components/Steps";
import Values from "./components/Values";
import { Testimonials } from "../home/components/testimonials";

export default function About() {
  return (
    <>
      <BgLeave />
      <Hero />
      <Values />
      <Steps />
      <OurTeam />
      <Testimonials />
    </>
  );
}
