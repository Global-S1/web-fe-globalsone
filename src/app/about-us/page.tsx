import { Hero } from "./components/hero";
import { OurValues } from "./components/our-values";
import { Testimonials } from "../home/components/testimonials";
import { OurTeam } from "@/shared/components/our-team";
import { getContentDataAboutUsPage } from "./services/about-us.service";
import { Overview } from "./components/overview";
import { BgLeave } from "@/shared/components/leaves-background-animation";

export default async function AboutUs() {
  const res = await getContentDataAboutUsPage();
  const data = res.data;
  return (
    <>
      <BgLeave />
      <Hero heroData={data.hero} />
      <OurValues ourValuesData={data.ourValues} />
      <Overview overviewData={data.overview} />
      <OurTeam />
      <Testimonials />
    </>
  );
}
