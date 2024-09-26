import { ContactAddress } from "./components/contact-address";
import { ContactForm } from "./components/contact-form";
import contactUsData from "@/data-mock/contact-us-page.json";
import { ContactMosaic } from "./components/contact-mosaic";

export default function ContactUs() {
  return (
    <>
      <ContactForm />
      <ContactAddress {...contactUsData.addressSecction} />
      <ContactMosaic
        title={"Hacemos realidad proyectos más ambiciosos"}
        description={
          "En Global S1, creemos en la tecnología como un aliado de la naturaleza. Nuestro equipo se esfuerza por desarrollar soluciones que no solo impulsen la innovación, sino que también respeten el entorno, integrando prácticas sostenibles en cada proyecto que realizamos."
        }
      />
    </>
  );
}
