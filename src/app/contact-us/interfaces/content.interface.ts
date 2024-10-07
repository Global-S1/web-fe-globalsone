export type IContactUsFormContent = {
  title: string;
  content: string;
  services: string[];
  terms: string;
};

export type IContactUsContactDataContent = {
  city: string;
  description: string;
  email: string;
  phone: string;
  address: string;
};

export type IContactUsOurTeamContent = {
  title: string;
  description: string;
};

export type IContactUsContent = {
  formData: IContactUsFormContent;
  contactData: IContactUsContactDataContent;
  ourTeam: IContactUsOurTeamContent;
};
