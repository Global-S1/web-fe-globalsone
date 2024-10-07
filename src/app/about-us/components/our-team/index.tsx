import { OurTeam } from "@/shared/components/our-team";
import { Section } from "@/shared/components/section";
import s from "./our-team.module.css";
import { IOurTeam } from "@/app/home/interfaces/content.interface";

interface Props {
  content: IOurTeam;
}

export const AboutUsOurTeam = ({ content }: Props) => {
  return (
    <Section extendStyle={s.ourTeam__section}>
      <OurTeam content={content} />
    </Section>
  );
};
