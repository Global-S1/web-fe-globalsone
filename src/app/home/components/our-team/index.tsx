import { OurTeam } from "@/shared/components/our-team";
import { Section } from "@/shared/components/section";
import s from "./our-team.module.css";
import { IOurTeam } from "../../interfaces/content.interface";

interface Props {
  content: IOurTeam;
}

export const OurTeamSection = ({ content }: Props) => {
  return (
    <Section extendStyle={s.ourTeam__section}>
      <OurTeam content={content} />
    </Section>
  );
};
