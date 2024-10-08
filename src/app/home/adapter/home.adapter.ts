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
    ourservice: Object.values(data.ourservice),
    contactus: data.contactus,
    ourteam: {
      title: "Aún no hay",
      description: "asdasdas",
    },
  };
};
