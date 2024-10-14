import { wordpressService } from "@/shared/services/wordpress.service";
import data from "@/wp-mock-data/home-data.json";
import { homeAdapter } from "../adapter/home.adapter";
import { IHomeContentInput } from "../interfaces/input.interface";
import { IHomeContent } from "../interfaces/content.interface";

export const getHomeDataService = async (): Promise<IHomeContent> => {
  try {
    const response = await wordpressService<IHomeContentInput>({
      id: "593",
      page: "pages",
    });
    return homeAdapter(response.data.acf);
  } catch (error) {
    const err = error as Error;
    console.error("Error fetching data:", err.message);
    return data;
  }
};
