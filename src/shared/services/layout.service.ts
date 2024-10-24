import { ILayoutLinks } from "../interfaces/layout.interface";
import { wordpressService } from "./wordpress.service";
import data from "@/wp-mock-data/links-data.json";

export const getLayoutLinks = async () => {
  try {
    const response = await wordpressService<ILayoutLinks>({
      id: "830",
      page: "posts",
    });
    
    return response.data.acf;
  } catch (error) {
    const err = error as Error;
    console.log(err.message);
    return data;
  }
};
