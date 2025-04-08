export type ITermsChunk = {
  text: string;
  highlight: boolean;
  link?: string;
};

export type IContactUsFormContent = {
  title: string;
  content: string;
  services: string[];
  terms: ITermsChunk[];
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
  groupImages: string[];
};

export type IContactUsContent = {
  formData: IContactUsFormContent;
  contactData: IContactUsContactDataContent;
  ourTeam: IContactUsOurTeamContent;
};
