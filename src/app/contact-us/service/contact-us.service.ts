import { wordpressService } from "@/shared/services/wordpress.service";
import data from "@/wp-mock-data/contact-us-data.json";
import { IContactUsContent } from "../interfaces/content.interface";

export const getContactUsDataService = async () => {
  try {
    const response = await wordpressService<IContactUsContent>({
      id: "",
      page: "contactus_page",
    });
    return response.data.acf;
  } catch (error) {
    return data;
  }
};
