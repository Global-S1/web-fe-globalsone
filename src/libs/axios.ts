import { URL_SERVER } from "@/shared/constants/url";
import axios from "axios";

export const wordpressInstance = axios.create({
  baseURL: URL_SERVER,
});
