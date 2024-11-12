import { IInside } from "@/app/home/interfaces/content.interface";
import { WPGetDataByContentType } from "@/shared/services/wordpress.service";
import data from "@/wp-mock-data/metrics-data.json";
import { IInsideInput } from "../interfaces/insides.interface";

export const getMetricsDataService = async () => {
  try {
    const response = await WPGetDataByContentType<IInsideInput>({
      id: "379",
      contentType: "insides",
    });
    return response.data.acf;
  } catch (error) {
    return data as IInside;
  }
};
