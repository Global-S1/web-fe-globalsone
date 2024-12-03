import { IHomeContent, TitleChunk } from "../interfaces/content.interface";
import { IHomeContentInput } from "../interfaces/input.interface";

export const homeAdapter = (data: IHomeContentInput): IHomeContent => {
  return {
    hero: {
      title: data.hero.title,
    },
    insidesSection: data.insidesSection,
    features: Object.values(data.features).map((feature) => ({
      ...feature,
      title: Object.values(feature.title) as TitleChunk[],
    })),
    whatwebuild: {
      title: data.whatwebuild.title,
      services: Object.values(data.whatwebuild.services),
    },
    ourService: {
      title: data.ourService.title,
      services: Object.values(data.ourService.services),
    },
    testimonials: data.testimonials,
    contactDescription: data.contactDescription,
  };
};
