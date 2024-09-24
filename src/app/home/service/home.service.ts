import axios from "axios";
import { data } from "@/data-mock/heroTitle.json";
import { URL_SERVER } from "@/shared/constants/url";


export const getCentralTitle = async () => {
  try {
    const response = await axios.get(URL_SERVER);
    return response.data;
  } catch (error) {
    return data;
  }
};
