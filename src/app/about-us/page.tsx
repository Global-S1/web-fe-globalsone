import { BgLeave } from "@/shared/animations/leaves-background-animation";
import { Testimonials } from "../home/components/testimonials";
import { getHomeDataService } from "../home/service/home.service";
import { Hero } from "./components/hero";
import { AboutUsOurTeam } from "./components/our-team";
import { OurValues } from "./components/our-values";
import { Overview } from "./components/overview";
import { getContentDataAboutUsPage } from "./services/about-us.service";

export default async function AboutUs() {
  const data = await getContentDataAboutUsPage();
  const ourTeamData = await getHomeDataService();
  return (
    <>
      <BgLeave />
      <Hero content={data.hero} />
      <OurValues content={data.ourValues} />
      <Overview content={data.overview} />
      <AboutUsOurTeam content={ourTeamData.ourteam} />
      <Testimonials />
    </>
  );
}
