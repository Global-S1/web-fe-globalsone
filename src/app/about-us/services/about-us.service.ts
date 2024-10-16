import dataMoc from "@/data-mock/about-us-data.json";
import { wordpressService } from "@/shared/services/wordpress.service";
import { IAboutUs, IAboutUsContent } from "../interfaces/content.interface";
import { aboutUsAdapter } from "../adapter/contact-us.adapter";

export const getContentDataAboutUsPage = async () => {
  try {
    const res = await wordpressService<IAboutUs>({
      id: "752",
      page: "pages",
    });
    const formated = aboutUsAdapter(res.data.acf);
    return formated;
  } catch (error) {
    const err = error as Error;
    console.log(err.message);
    return dataMoc;
  }
};
