import { wordpressService } from "@/shared/services/wordpress.service";
import data from "@/wp-mock-data/home-data.json";
import { homeAdapter } from "../adapter/home.adapter";
import { IHomeContentInput } from "../interfaces/input.interface";

export const getHomeDataService = async () => {
  try {
    const response = await wordpressService<IHomeContentInput>({
      id: "327",
      page: "home_page",
    });
    return homeAdapter(response.data.acf);
  } catch (error) {
    return data;
  }
};
