import { URL_CHAT_IA } from "@/shared/constants/url";
import { ELocalStorage } from "@/shared/enums/local-storage.enum";
import { WPGetDataByContentType } from "@/shared/services/wordpress.service";
import data from "@/wp-mock-data/home-data.json";
import { homeAdapter } from "../adapter/home.adapter";
import { IHomeContent } from "../interfaces/content.interface";
import { IHomeContentInput } from "../interfaces/input.interface";
import { ISendQuestionParam } from "./param-interface";
import axios from "axios";

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

const getUserIP = async (): Promise<string | null> => {
  try {
    const response = await axios.get("https://api.ipify.org?format=json");
    return response.data.ip;
  } catch (error) {
    console.error("Error obtaining IP:", error);
    return null;
  }
};

export const sendQuestion = async (
  fields: ISendQuestionParam,
  onMessage: (msg: string, success: boolean) => void
) => {
  try {
    const currentThreadId = localStorage.getItem(ELocalStorage.THREAD_ID);
    const userIp = await getUserIP();
    const body = {
      ...fields,
      ...(currentThreadId && { threadId: currentThreadId }),
    };
    const response = await fetch(`${URL_CHAT_IA}/chat/create-chat`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(userIp && { "ip-address": userIp }),
      },
      body: JSON.stringify(body),
    });

    const success = response.headers.get("success") === "true" ? true : false;
    const thredId = response.headers.get("thread-id");

    if (thredId) {
      localStorage.setItem(ELocalStorage.THREAD_ID, thredId);
    }

    const reader = response.body?.getReader();
    const decoder = new TextDecoder("utf-8");

    if (!reader) {
      throw new Error("No readable stream found.");
    }

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      const chunk = decoder.decode(value, { stream: true });
      onMessage(chunk, success);
    }
  } catch (error) {
    console.error("Error while streaming:", error);
  }
};
