import { WPGetDataByContentType } from "@/shared/services/wordpress.service";
import data from "@/wp-mock-data/home-data.json";
import { homeAdapter } from "../adapter/home.adapter";
import { IHomeContentInput } from "../interfaces/input.interface";
import { IHomeContent } from "../interfaces/content.interface";

export const getHomeDataService = async (): Promise<IHomeContent> => {
  try {
    const response = await WPGetDataByContentType<IHomeContentInput>({
      id: "593",
      contentType: "pages",
    });
    return homeAdapter(response.data.acf);
  } catch (error) {
    console.log("Esto es un error");
    return data;
  }
};
