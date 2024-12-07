import { Hero } from "@/app/home/components/hero";
import { ContactUs } from "./components/contact-us";
import { Features } from "./components/feature";
import { OurServices } from "./components/our-services";
import { OurTeamSection } from "./components/our-team";
import { Testimonials } from "./components/testimonials";
import { WhatWeBuild } from "./components/what-we-build";
import { getHomeDataService } from "./service/home.service";
import { InsideSection } from "./components/insides-serction";

export default async function Home() {
  const res = await getHomeDataService();
  return (
    <>
      <Hero content={res.hero} />
      <InsideSection content={res.insidesSection} />
      <Features content={res.features} />
      <WhatWeBuild content={res.whatwebuild} />
      <OurServices content={res.ourService} />
      <Testimonials content={res.testimonials} />
      <OurTeamSection />
      <ContactUs content={res.contactDescription.title} />
    </>
  );
}

export async function generateStaticParams() {
  return [{}];
}
