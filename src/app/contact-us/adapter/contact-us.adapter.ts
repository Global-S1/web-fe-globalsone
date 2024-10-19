import { IContactUsContent } from "../interfaces/content.interface";

export const ContactUsAdapter = (data: IContactUsInput): IContactUsContent => {
  return {
    formData: {
      title: data.formDetail.title,
      content: data.formDetail.content,
      terms: Object.values(data.formDetail.terms),
      services: Object.values(data.formDetail.services),
    },
    contactData: {
      ...data.contactInfo,
      city: data.contactInfo.cityPlase,
      address: data.contactInfo.adress,
    },
    ourTeam: {
      title: data.teamPictures.title,
      description: data.teamPictures.description,
      groupImages: Object.values(data.teamPictures.group_images),
    },
  };
};
