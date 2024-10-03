import axios from "axios";
// import { data } from "@/data-mock/heroTitle.json";
import { URL_SERVER } from "@/shared/constants/url";
import data from "@/wp-mock-data/home-data.json"

export const getHomeDataService = async () => {
  try {
    const response = await axios.get(`${URL_SERVER}/http://globals.local/wp-json/wp/v2/home_page/28?acf_format=standard`);
    return response.acf;
  } catch (error) {
    return data;
  }
};
