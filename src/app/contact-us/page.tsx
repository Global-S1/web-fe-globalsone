import { ContactAddress } from "./components/contact-address";
import { ContactForm } from "./components/contact-form";
import { getContactUsDataService } from "./service/contact-us.service";

export default async function ContactUs() {
  const res = await getContactUsDataService();
  return (
    <>
      <ContactForm {...res.formData} />
      <ContactAddress {...res.contactData} />
    </>
  );
}
