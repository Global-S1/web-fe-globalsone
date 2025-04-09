import { WPGetDataByContentType } from "@/shared/services/wordpress.service";
import data from "@/wp-mock-data/home-data.json";
import { homeAdapter } from "../adapter/home.adapter";
import { IHomeContentInput } from "../interfaces/input.interface";
import { IHomeContent } from "../interfaces/content.interface";
import { ISendQuestionParam } from "./param-interface";
import { URL_CHAT_IA } from "@/shared/constants/url";

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

export const sendQuestion = async (
  fields: ISendQuestionParam,
  onMessage: (msg: string) => void
) => {
  try {
    const response = await fetch(`${URL_CHAT_IA}/chat/create-chats`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fields),
    });

    const reader = response.body?.getReader();
    const decoder = new TextDecoder("utf-8");

    if (!reader) {
      throw new Error("No readable stream found.");
    }

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      const chunk = decoder.decode(value, { stream: true });
      onMessage(chunk);
    }
  } catch (error) {
    console.error("Error while streaming:", error);
  }
};
