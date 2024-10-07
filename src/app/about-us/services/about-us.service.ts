import axios from "axios";
import { URL_SERVER } from "@/shared/constants/url";
import dataMoc from "@/data-mock/about-us-data.json";
import { wordpressService } from "@/shared/services/wordpress.service";
import { IAboutUsContent } from "../interfaces/content.interface";

export const getContentDataAboutUsPage = async () => {
  try {
    const res = await wordpressService<IAboutUsContent>({
      id: "",
      page: "aboutus_page",
    });
    const data = res.data.acf;
    return data;
  } catch (err) {
    return dataMoc;
  }
};
