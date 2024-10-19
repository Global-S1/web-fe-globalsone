import { Section } from "@/shared/components/section";
import { ThanksModal } from "@/shared/components/thanks-modal";
import s from "./success.module.css";
import { getSuccessPageData } from "./service/success.service";
import { Leave } from "@/assets/leavesComponents/Leave";
import { LeaveClear } from "@/assets/leavesComponents/LeaveClear";

export default async function Success() {
  const res = await getSuccessPageData();

  return (
    <Section extendStyle={s.success__section}>
      <div className={s.leave__one}>
        <Leave />
      </div>
      <div className={s.leave__three}>
        <Leave />
      </div>
      <div className={s.magenta__circle}></div>
      <div className={s.green__circle}></div>
      <ThanksModal {...res} />
      <div className={s.leave__two}>
        <LeaveClear />
      </div>
    </Section>
  );
}
