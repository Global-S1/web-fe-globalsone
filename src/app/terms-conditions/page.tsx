import { Section } from "@/shared/components/section";
import { getTermsConditions } from "./services/terms-conditions.service";
import s from "./terms-conditions.module.css";
import { FloatingBot } from "@/shared/components/floating-bot/floating-bot";

export default async function TermsConditions() {
  const res = await getTermsConditions();
  if (!res || !res.content) return null;
  return (
    <>
      <Section extendStyle={s.terms__section}>
        <div
          className={s.terms__container}
          dangerouslySetInnerHTML={{ __html: res.content.rendered }}
        />
      </Section>
      <FloatingBot />
    </>
  );
}

export async function generateStaticParams() {
  return [{}];
}
