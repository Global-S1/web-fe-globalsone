import { OurTeam } from "@/shared/components/our-team";
import { Section } from "@/shared/components/section";
import s from "./our-team.module.css";
import { RedirectBtn } from "@/shared/components/redirect-btn";

export const OurTeamSection = () => {
  return (
    <Section extendStyle={s.ourTeam__section}>
      <OurTeam />
      <div className={s.ourTeam__btn__container}>
        <RedirectBtn
          route="/about-us"
          text="Quiero Conocerlos"
          extendStyle={s.ourTeam__btn}
        />
      </div>
    </Section>
  );
};
