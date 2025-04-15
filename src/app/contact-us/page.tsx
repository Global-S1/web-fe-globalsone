import { FloatingBot } from "@/shared/components/floating-bot/floating-bot";
import { ContactAddress } from "./components/contact-address";
import { ContactForm } from "./components/contact-form";
import { getContactUsDataService } from "./service/contact-us.service";

export default async function ContactUs() {
  const res = await getContactUsDataService();
  return (
    <>
      <ContactForm {...res.formData} />
      <ContactAddress {...res.contactData} />
      <FloatingBot />
    </>
  );
}

export async function generateStaticParams() {
  return [{}];
}
