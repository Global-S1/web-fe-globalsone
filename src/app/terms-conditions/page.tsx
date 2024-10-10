import { Section } from "@/shared/components/section";
import { getTermsConditions } from "./services/terms-conditions.service";
import s from "./terms-conditions.module.css";

export default async function TermsConditions() {
  const res = await getTermsConditions();
  if (!res) return null;
  return (
    <>
      <Section extendStyle={s.terms__section}>
        <div dangerouslySetInnerHTML={{ __html: res.content.rendered }} />
      </Section>
    </>
  );
}
