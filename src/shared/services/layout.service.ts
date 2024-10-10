import { ILayoutLinks } from "../interfaces/layout.interface";
import { wordpressService } from "./wordpress.service";
import data from "@/wp-mock-data/links-data.json";

export const getLayoutLinks = async () => {
  try {
    const response = await wordpressService<ILayoutLinks>({
      id: "links_sections",
      page: "483",
    });

    return response.data.acf;
  } catch (error) {
    return data;
  }
};
