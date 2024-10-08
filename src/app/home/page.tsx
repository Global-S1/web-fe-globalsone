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
  const res  = await getHomeDataService();
  console.log("resultado de getHomeDataService",res);
  const { hero, features, whatwebuild, ourservice, ourteam } = res;

  return (
    <>
      <BgLeave />
      <Hero content={hero} />
      <Features content={features} />
      <WhatWeBuild content={whatwebuild} />
      <OurServices content={ourservice} />
      <Testimonials />
      {/* <OurTeamSection content={ourteam} /> */}
      <ContactUs />
    </>
  );
}
