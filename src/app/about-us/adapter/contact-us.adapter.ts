import { IAboutUs, IAboutUsContent } from "../interfaces/content.interface";

export const aboutUsAdapter = (data: IAboutUs): IAboutUsContent => {
  return {
    hero: data.hero,
    ourValues: {
      title: data.ourValues.title,
      values: Object.values(data.ourValues.values).filter(
        (i) => typeof i.img == "string"
      ),
    },
    overview: Object.values(data.businessDescription),
    testimonial: data.testimonial,
  };
};
