import { MosaicTeam } from "@/shared/components/mosaic-team";
import { Hero } from "./components/hero";
import { AboutUsOurTeam } from "./components/our-team";
import { OurValues } from "./components/our-values";
import { Overview } from "./components/overview";
import { getContentDataAboutUsPage } from "./services/about-us.service";
import { TestimonialSection } from "./components/testimonial-section";
import { FloatingBot } from "@/shared/components/floating-bot/floating-bot";

export default async function AboutUs() {
  const data = await getContentDataAboutUsPage();
  return (
    <>
      <Hero content={data.hero} />
      <OurValues content={data.ourValues} />
      <Overview content={data.overview} />
      <AboutUsOurTeam />
      <MosaicTeam />
      <TestimonialSection content={data.testimonial} />
      <FloatingBot />
    </>
  );
}

export async function generateStaticParams() {
  return [{}];
}
