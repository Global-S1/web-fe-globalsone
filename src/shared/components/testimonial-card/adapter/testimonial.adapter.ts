import { ITestimonialsContent } from "../interfaces/content.interface";

export const testimonialAdapter = (
  data: ITestimonialInput
): ITestimonialsContent => {
  return {
    name: data.name,
    description: data.description,
    bgImg: Object.values(data.bgImg),
    clientImage: data.clientImage,
  };
};
