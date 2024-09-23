import axios from "axios";
import { data } from "@/data-mock/heroTitle.json";

export const URL = "http://test.local/wp-json/api/v1/get-text";

export const getCentralTitle = async () => {
  try {
    const response = await axios.get(URL);
    return response.data;
  } catch (error) {
    return data;
  }
};
