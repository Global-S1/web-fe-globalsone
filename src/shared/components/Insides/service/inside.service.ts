import { IInside } from "@/app/home/interfaces/content.interface";
import { wordpressService } from "@/shared/services/wordpress.service";
import data from "@/wp-mock-data/metrics-data.json";
import { IInsideInput } from "../interfaces/insides.interface";

export const getMetricsDataService = async () => {
  try {
    const response = await wordpressService<IInsideInput>({
      id: "379",
      page: "insides",
    });
    return response.data.acf;
  } catch (error) {
    return data as IInside;
  }
};
