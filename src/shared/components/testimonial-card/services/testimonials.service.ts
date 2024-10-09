import { ClinetDaTA } from "@/data-mock/testimonial.moc";
import { wordpressService } from "@/shared/services/wordpress.service";
import { testimonialAdapter } from "../adapter/testimonial.adapter";

export const getTestimonials = async () => {
  try {
    const response = await wordpressService<ITestimonialInput>({
      id: "398",
      page: "testimonial",
    });
    return testimonialAdapter(response.data.acf);
  } catch (error) {
    return ClinetDaTA;
  }
};
