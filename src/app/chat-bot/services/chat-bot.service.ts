import { chatIAInstance } from "@/libs/axios";
import { IHttpData } from "@/shared/interfaces/http.interface";
import { ISendQuestionResponse } from "./response.interface";
import { ISendQuestionParam } from "./params.interface";

export const ChatBotService = () => {
  const sendQuestion = async (fields: ISendQuestionParam) => {
    const response = await chatIAInstance.post<
      IHttpData<ISendQuestionResponse>
    >("/chat/create-chat", fields);

    return response;
  };

  return { sendQuestion };
};
