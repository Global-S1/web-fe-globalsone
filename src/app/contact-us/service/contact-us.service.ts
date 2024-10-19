import { wordpressService } from "@/shared/services/wordpress.service";
import data from "@/wp-mock-data/contact-us-data.json";
import { IContactUsContent } from "../interfaces/content.interface";
import { ContactUsAdapter } from "../adapter/contact-us.adapter";

export const getContactUsDataService = async () => {
  try {
    const response = await wordpressService<IContactUsInput>({
      id: "791",
      page: "pages",
    });
    return ContactUsAdapter(response.data.acf);
  } catch (error) {
    const err = error as Error
    console.log(err.message);
    return data;
  }
};
