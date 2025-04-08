import { WPGetDataByContentType } from "@/shared/services/wordpress.service";
import { testimonialAdapter } from "../adapter/testimonial.adapter";
import data from "@/wp-mock-data/testimonial-data.json";

export const getTestimonials = async () => {
  try {
    const response = await WPGetDataByContentType<ITestimonialInput>({
      id: "398",
      contentType: "testimonial",
    });
    return testimonialAdapter(response.data.acf);
  } catch (error) {
    return data;
  }
};
