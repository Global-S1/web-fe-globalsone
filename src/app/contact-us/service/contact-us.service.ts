import { WPGetDataByContentType } from "@/shared/services/wordpress.service";
import data from "@/wp-mock-data/contact-us-data.json";
import { IContactUsContent } from "../interfaces/content.interface";
import { ContactUsAdapter } from "../adapter/contact-us.adapter";

export const getContactUsDataService = async () => {
  try {
    const response = await WPGetDataByContentType<IContactUsInput>({
      id: "791",
      contentType: "pages",
    });
    console.log(response.data.acf.formDetail);
    return ContactUsAdapter(response.data.acf);
  } catch (error) {
    return data;
  }
};
