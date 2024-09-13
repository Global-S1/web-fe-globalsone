import { Hero } from "@/app/home/components/hero";
import { Features } from "./components/feature";
import { WhatWeBuild } from "./components/what-we-build";
import { OurServices } from "./components/our-services";
import { Testimonials } from "./components/testimonials";
import { OurTeam } from "@/components/share/our-team";
import { ContactUs } from "./components/contact-us";
import { BgLeave } from "@/components/BgLeave";

export default function Home() {
  return (
    <>
      <BgLeave />
      <Hero />
      <Features />
      <WhatWeBuild />
      <OurServices />
      <Testimonials />
      <OurTeam />
      <ContactUs />
    </>
  );
}
