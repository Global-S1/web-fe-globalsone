import { OurTeam } from "@/shared/components/our-team";
import { Section } from "@/shared/components/section";
import s from "./our-team.module.css";
import { IOurTeam } from "../../interfaces/content.interface";

export const OurTeamSection = () => {
  return (
    <Section extendStyle={s.ourTeam__section}>
      <OurTeam />
    </Section>
  );
};
