import { OurTeam } from "@/shared/components/our-team";
import { Section } from "@/shared/components/section";
import s from "./our-team.module.css";

export const OurTeamSection = ({ ourTeamData }) => {
  return (
    <Section extendStyle={s.ourTeam__section}>
      <OurTeam ourTeamData={ourTeamData} />
    </Section>
  );
};
