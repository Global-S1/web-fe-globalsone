import data from "@/wp-mock-data/about-us-data.json";
import { WPGetDataByContentType } from "@/shared/services/wordpress.service";
import { IAboutUs, IAboutUsContent } from "../interfaces/content.interface";
import { aboutUsAdapter } from "../adapter/contact-us.adapter";

export const getContentDataAboutUsPage = async () => {
  try {
    const res = await WPGetDataByContentType<IAboutUs>({
      id: "752",
      contentType: "pages",
    });
    const formated = aboutUsAdapter(res.data.acf);
    return formated;
  } catch (error) {
    const err = error as Error;
    console.log(err.message);
    return data;
  }
};
