import Hero from "@/app/home/components/Hero";
import Features from "@/app/home/components/Features";
import WhatWeBuild from "@/app/home/components/WhatWeBuild";
import Services from "@/app/home/components/Services";
import OurTeam from "@/components/common/OurTeam";
import ContactUs from "./components/ContactUs";
import { BgLeave } from "@/components/BgLeave";
import { Testimonials } from "./components/Testimonials";

export default function Home() {
  return (
    <>
      <BgLeave />
      <Hero />
      <Features />
      <WhatWeBuild />
      <Services />
      <Testimonials />
      <OurTeam />
      <ContactUs />  
    </>
  );
}
