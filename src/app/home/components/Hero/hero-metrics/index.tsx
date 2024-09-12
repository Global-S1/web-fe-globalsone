import { Leave } from "@/assets/leavesComponents/Leave";
import { Insides } from "@/components/Insides";
import s from "./hero-metrics.module.css";

export const HeroMetrics = () => {
  return (
    <div className={s.heroMetrics_container}>
      <div className={s.heroMetrics_title}>
        <h2>
          TRABAJA CON PROFESIONALES <br />Y VE COMO TUS IDEAS SE DIGITALIZAN
        </h2>
      </div>
      <Insides />
    </div>
  );
};
