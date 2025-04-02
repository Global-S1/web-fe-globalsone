"use client";

import { ELocalStorage } from "@/shared/enums/local-storage.enum";
import { IMessage } from "../../interfaces/chat-bot.interface";
import { ChatBotInput } from "../input/chat-bot-input";
import { ChatBotMessages } from "../messages/chat-bot-messages";
import { useEffect, useState } from "react";
import { ChatBotService } from "../../services/chat-bot.service";

const { sendQuestion } = ChatBotService();

export const ChatSystem = () => {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const instantsMessages = [
    "Solicitar una propuesta personalizada",
    "Cuéntame más sobre los servicios",
    "Casos de Éxito",
  ];

  const setNewMessage = (message: IMessage) => {
    setMessages((prev) => [...prev, message]);
    const currentMessage = localStorage.getItem(
      ELocalStorage.CHAT_BOT_MESSAGES
    );
    if (currentMessage) {
      const localMesages = JSON.parse(currentMessage) as IMessage[];
      localMesages.push(message);
      localStorage.setItem(
        ELocalStorage.CHAT_BOT_MESSAGES,
        JSON.stringify(localMesages)
      );
    } else {
      localStorage.setItem(
        ELocalStorage.CHAT_BOT_MESSAGES,
        JSON.stringify([message])
      );
    }
  };

  const sendInstantMessage = (message: string) => {
    const newMessage: IMessage = {
      id: `user-${new Date()}`,
      sender: "user",
      text: message,
      timestamp: new Date(),
    };

    setNewMessage(newMessage);
  };

  useEffect(() => {
    const localMessages = () => {
      try {
        const localMessages: IMessage[] = JSON.parse(
          localStorage.getItem(ELocalStorage.CHAT_BOT_MESSAGES) as string
        );
        return localMessages;
      } catch {
        return [];
      }
    };

    setMessages(localMessages);

    return;
  }, []);

  return (
    <div className="w-full grow flex flex-col">
      <ChatBotMessages messages={messages} />

      <ChatBotInput
        instantsMessages={instantsMessages}
        haveMessage={!!messages}
        sendInstantMessage={sendInstantMessage}
      />
    </div>
  );
};
