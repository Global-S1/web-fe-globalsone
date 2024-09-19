import { Hero } from "@/app/home/components/hero";
import { Features } from "./components/feature";
import { WhatWeBuild } from "./components/what-we-build";
import { OurServices } from "./components/our-services";
import { Testimonials } from "./components/testimonials";
import { OurTeam } from "@/shared/components/our-team";
import { ContactUs } from "./components/contact-us";
import { BgLeave } from "@/shared/components/leaves-background-animation";

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
