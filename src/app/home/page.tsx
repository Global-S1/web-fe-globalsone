import { Hero } from "@/app/home/components/hero";
import { Features } from "./components/feature";
import { WhatWeBuild } from "./components/what-we-build";
import { OurServices } from "./components/our-services";
import { Testimonials } from "./components/testimonials";
import { OurTeam } from "@/shared/components/our-team";
import { ContactUs } from "./components/contact-us";
import { BgLeave } from "@/shared/animations/leaves-background-animation";
import { getHomeDataService } from "./service/home.service";
import { IFeatures } from "@/shared/interfaces/IFeatures";
import { OurTeamSection } from "./components/our-team";

export default async function Home() {
  const res = await getHomeDataService();
  return (
    <>
      <BgLeave />
      <Hero {...res.hero} />
      <Features featureData={res.features} />
      <WhatWeBuild whatWeBildData={res.whatWeBuild} />
      <OurServices ourServiceData={res.ourService} />
      <Testimonials />
      <OurTeamSection ourTeamData={res.ourTeam} />
      <ContactUs /> 
    </>
  );
}
