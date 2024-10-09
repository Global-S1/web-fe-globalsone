import { Hero } from "@/app/home/components/hero";
import { BgLeave } from "@/shared/animations/leaves-background-animation";
import { ContactUs } from "./components/contact-us";
import { Features } from "./components/feature";
import { OurServices } from "./components/our-services";
import { OurTeamSection } from "./components/our-team";
import { Testimonials } from "./components/testimonials";
import { WhatWeBuild } from "./components/what-we-build";
import { getHomeDataService } from "./service/home.service";

export default async function Home() {
  const res = await getHomeDataService();
  return (
    <>
      <BgLeave />
      <Hero content={res.hero} />
      <Features content={res.features} />
      <WhatWeBuild content={res.whatwebuild} />
      <OurServices content={res.ourservice} />
      <Testimonials content={res.testimonials} />
      <OurTeamSection />
      <ContactUs />
    </>
  );
}
