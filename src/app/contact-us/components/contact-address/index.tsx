import { Section } from "@/shared/components/section";

export const ContactAddress = ({ addres, description, email, phone, city }) => {
  return (
    <Section>
      <div>
        <div>
          <span>Regional Offices</span>
          <h2>{addres}</h2>
          <p>{description}</p>
        </div>
        <div>
            <button>{email}</button>
            <button>{phone}</button>
            <button>{city?.name}</button>
        </div>
      </div>
    </Section>
  );
};
