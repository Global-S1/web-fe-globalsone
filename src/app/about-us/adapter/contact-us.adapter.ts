import { IAboutUs, IAboutUsContent } from "../interfaces/content.interface";

export const aboutUsAdapter = (data: IAboutUs): IAboutUsContent => {
  return {
    hero: data.hero,
    ourValues: {
      title: data.ourValues.title,
      values: Object.values(data.ourValues.values),
    },
    overview: Object.values(data.businessDescription),
  };
};
