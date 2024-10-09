import { IHomeContent } from "../interfaces/content.interface";
import { IHomeContentInput } from "../interfaces/input.interface";

export const homeAdapter = (data: IHomeContentInput): IHomeContent => {
  return {
    hero: data.hero,
    features: Object.values(data.features).map((feature) => ({
      ...feature,
      title: Object.values(feature.title),
    })),
    whatwebuild: {
      title: data.whatwebuild.title,
      services: Object.values(data.whatwebuild.services),
    },
    ourservice: {
      title: data.ourService.title,
      services: Object.values(data.ourService.services),
    },
    testimonials: data.testimonials,
    contactus: data.contactus,
  };
};
