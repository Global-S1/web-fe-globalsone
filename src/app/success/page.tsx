import { Section } from "@/shared/components/section";
import { ThanksModal } from "@/shared/components/thanks-modal";
import s from "./success.module.css";
import { getSuccessPageData } from "./service/success.service";

export default async function Success() {
  const res = await getSuccessPageData();

  return (
    <Section extendStyle={s.success__section}>
      <div>
        <ThanksModal {...res}/>
      </div>
    </Section>
  );
}
