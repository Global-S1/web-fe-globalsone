import { URL_CHAT_IA, URL_SERVER } from "@/shared/constants/url";
import axios from "axios";

export const wordpressInstance = axios.create({
  baseURL: URL_SERVER,
});

export const chatIAInstance = axios.create({
  baseURL: URL_CHAT_IA,
});
