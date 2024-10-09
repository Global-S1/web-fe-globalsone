type FormDetail = {
  title: string;
  content: string;
  terms: string;
  services: {
    service_1: string;
    service_2: string;
    service_3: string;
    service_4: string;
    service_5: string;
    service_6: string;
    service_7: string;
    service_8: string;
    service_9: string;
    service_10: string;
    service_11: string;
  };
};

type ContactInfo = {
  cityPlase: string;
  description: string;
  email: string;
  phone: string;
  adress: string;
};

type TeamPictures = {
  title: string;
  group_images: {
    img_1: string;
    img_2: string;
    img_3: string;
    img_4: string;
    img_5: string;
    img_6: string;
  };
  description: string;
};

type IContactUsInput = {
  formDetail: FormDetail;
  contactInfo: ContactInfo;
  teamPictures: TeamPictures;
};
