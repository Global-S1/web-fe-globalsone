import { URL_CHAT_IA } from "@/shared/constants/url";
import { ISendQuestionParam } from "./params.interface";

export const ChatBotService = () => {
  const sendQuestion = async (
    fields: ISendQuestionParam,
    onMessage: (msg: string) => void
  ) => {
    try {
      const response = await fetch(`${URL_CHAT_IA}/chat/create-chat`, {
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
        console.log(chunk);
        onMessage(chunk);
      }
    } catch (error) {
      console.error("Error while streaming:", error);
    }
  };

  return { sendQuestion };
};
