import { MosaicTeam } from "@/shared/components/mosaic-team";
import { Testimonials } from "../home/components/testimonials";
import { Hero } from "./components/hero";
import { AboutUsOurTeam } from "./components/our-team";
import { OurValues } from "./components/our-values";
import { Overview } from "./components/overview";
import { getContentDataAboutUsPage } from "./services/about-us.service";
import { TestimonialSection } from "./components/testimonial-section";

export default async function AboutUs() {
  const data = await getContentDataAboutUsPage();
  return (
    <>
      <Hero content={data.hero} links={data.socialMedia}/>
      <OurValues content={data.ourValues} />
      <Overview content={data.overview} />
      <AboutUsOurTeam />
      <MosaicTeam />
      <TestimonialSection content={data.testimonial} />
    </>
  );
}
