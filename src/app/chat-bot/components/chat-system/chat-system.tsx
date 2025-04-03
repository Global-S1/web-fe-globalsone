"use client";

import { ELocalStorage } from "@/shared/enums/local-storage.enum";
import { IMessage } from "../../interfaces/chat-bot.interface";
import { ChatBotInput } from "../input/chat-bot-input";
import { ChatBotMessages } from "../messages/chat-bot-messages";
import { ChangeEvent, useEffect, useState } from "react";
import { ChatBotService } from "../../services/chat-bot.service";
import { useRouter, useSearchParams } from "next/navigation";

const { sendQuestion } = ChatBotService();

export const ChatSystem = () => {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [input, setInput] = useState<string>("");
  const query = useSearchParams();
  const router = useRouter();
  const isMessage = Boolean(query.get("message"));

  const instantsMessages = [
    "Solicitar una propuesta personalizada",
    "Cuéntame más sobre los servicios",
    "Casos de Éxito",
  ];

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const setNewMessage = (message: IMessage) => {
    setMessages((prev) => {
      if (prev) {
        return [...prev, message];
      } else {
        return [message];
      }
    });

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
    setIsLoading(true);
    const newMessage: IMessage = {
      id: `user-${new Date()}`,
      sender: "user",
      text: message,
      timestamp: new Date(),
    };

    sendQuestion({ message })
      .then((res) => {
        const botMessage: IMessage = {
          id: `bot-${new Date()}`,
          sender: "bot",
          text: res.data.data.content,
          timestamp: new Date(),
        };

        setNewMessage(botMessage);
      })
      .finally(() => setIsLoading(false));

    setNewMessage(newMessage);
  };

  const sendMessage = () => {
    if (input !== "") {
      setIsLoading(true);
      const newMessage: IMessage = {
        id: `user-${new Date()}`,
        sender: "user",
        text: input,
        timestamp: new Date(),
      };

      sendQuestion({ message: input })
        .then((res) => {
          const botMessage: IMessage = {
            id: `bot-${new Date()}`,
            sender: "bot",
            text: res.data.data.content,
            timestamp: new Date(),
          };

          setNewMessage(botMessage);
        })
        .finally(() => setIsLoading(false));

      setNewMessage(newMessage);
    }
  };

  const handleSend = () => {
    if (input.trim() !== "") {
      sendMessage();
      setInput("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSend();
    }
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

  useEffect(() => {
    if (isMessage) {
      const temporalMesage = localStorage.getItem(
        ELocalStorage.TEMPORAL_MESSAGE
      );
      if (temporalMesage) {
        sendInstantMessage(temporalMesage);
        localStorage.removeItem(ELocalStorage.TEMPORAL_MESSAGE);
        router.push("/chat-bot");
      }
    }
  }, []);

  return (
    <div className="w-full max-h-[calc(100vh-80px)] grow flex flex-col">
      <ChatBotMessages messages={messages} />

      <ChatBotInput
        instantsMessages={instantsMessages}
        sendInstantMessage={sendInstantMessage}
        haveMessage={!!messages}
        isLoading={isLoading}
        input={input}
        onChangeInput={onChangeInput}
        handleEnter={handleKeyDown}
        handleSend={handleSend}
      />
    </div>
  );
};
