"use client";

import { ArrowDropDown } from "@/assets/icons/arrow-drop-down";
import { ELocalStorage } from "@/shared/enums/local-storage.enum";
import { motion, Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { EmptyChat } from "./empty-chat/empty-chat";
import s from "./hero.bubble-chat-bot.module.css";
import { InputChat } from "./input-chat/input-chat";
import { Messages } from "./messages/messages";
import { FloatingBot } from "@/shared/components/floating-bot/floating-bot";
import { sendQuestion } from "@/app/home/service/home.service";
import { IMessage } from "@/app/home/interfaces/message.interface";
import dayjs from "dayjs";

export const HeroBubbleChatBot = () => {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isChatVisible, setIsChatVisible] = useState<boolean>(false);
  const [input, setInput] = useState<string>("");
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const containerCloudVariants: Variants = {
    focused: {
      width: "100%",
      height: "60vh",
      top: "-50vh",
      background: "linear-gradient(to right, #1A0259cc, #277686cc)",
      backdropFilter: "blur(10px)",
      boxShadow: "0 4px 0px rgba(39, 118, 134, 0.5)",
      transition: { duration: 0.2 },
    },
    unfocused: {
      width: "auto",
      height: "46px",
      fontSize: "10px",
      textWrap: "nowrap",
      padding: "11px 18px",
      background: "linear-gradient(to right, #1A0259, #277686)",
      border: "solid 2px #19DBCA",
      boxShadow: "none",
      backdropFilter: "none",
      transition: { duration: 0.2 },
    },
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(event.target as Node)
    ) {
      setIsFocus(false);
    }
  };

  const setNewMessage = (message: IMessage) => {
    setMessages((prevMessages) => {
      const messageIndex = prevMessages
        ? prevMessages.findIndex((msg) => msg.id === message.id)
        : -1;

      if (messageIndex > -1) {
        const concatMessage = prevMessages[messageIndex].text + message.text;

        const updatedMessages = [...prevMessages];
        updatedMessages[messageIndex] = {
          ...prevMessages[messageIndex],
          text: concatMessage,
        };
        return updatedMessages;
      } else {
        return prevMessages ? [...prevMessages, message] : [message];
      }
    });

    let storedMessages: IMessage[] = [];
    const currentMessage = localStorage.getItem(
      ELocalStorage.CHAT_BOT_MESSAGES
    );

    if (currentMessage) {
      storedMessages = JSON.parse(currentMessage) as IMessage[];
    } else {
      localStorage.setItem(
        ELocalStorage.DATE_LAST_MESSAGE,
        JSON.stringify(new Date())
      );
    }

    const messageIndex = storedMessages.findIndex(
      (msg) => msg.id === message.id
    );

    if (messageIndex > -1) {
      storedMessages[messageIndex].text += message.text;
    } else {
      storedMessages.push(message);
    }

    localStorage.setItem(
      ELocalStorage.CHAT_BOT_MESSAGES,
      JSON.stringify(storedMessages)
    );
  };

  const sendMessage = (message: string) => {
    setIsLoading(true);
    const userMessage: IMessage = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: message,
      timestamp: new Date(),
    };
    setNewMessage(userMessage);

    const botMessageId = `bot-${Date.now()}`;
    const errorMessage: IMessage = {
      id: `error-${Date.now()}`,
      sender: "error",
      text: "Ocurrió un error al procesar tu mensaje.",
      timestamp: new Date(),
    };

    sendQuestion({ message }, (partialResponse, success) => {
      if (success) {
        const botMessage: IMessage = {
          id: botMessageId,
          sender: "bot",
          text: partialResponse,
          timestamp: new Date(),
        };
        setNewMessage(botMessage);
      } else {
        setNewMessage(errorMessage);
      }
    }).finally(() => setIsLoading(false));
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
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (!containerRef.current) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          setIsChatVisible(true);
        } else {
          setIsChatVisible(false);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    const currentContainer = containerRef.current;
    if (currentContainer) {
      observer.observe(currentContainer);
    }

    return () => {
      if (currentContainer) {
        observer.unobserve(currentContainer);
      }
    };
  }, []);

  useEffect(() => {
    const currentLastDate = JSON.parse(
      localStorage.getItem(ELocalStorage.DATE_LAST_MESSAGE) as string
    );
    const currentDate = dayjs(currentLastDate);
    const diff = dayjs().diff(currentDate, "day");

    if (diff >= 2) {
      localStorage.removeItem(ELocalStorage.CHAT_BOT_MESSAGES);
      localStorage.removeItem(ELocalStorage.DATE_LAST_MESSAGE);
    }
  }, []);

  return (
    <>
      <motion.div
        initial={"hidden"}
        animate={"visible"}
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        className="absolute left-0 top-0 h-screen w-full flex items-end justify-center pb-4 z-[20]"
      >
        <div
          className="h-auto max-w-[90vw] md:mb-8 w-full relative"
          ref={containerRef}
        >
          <InputChat
            input={input}
            setInput={setInput}
            isFocus={isFocus}
            setIsFocus={setIsFocus}
            isLoading={isLoading}
            sendMessage={sendMessage}
          />
          <motion.div
            className={`${s.cloud__default} overflow-hidden ${
              isFocus && "after:opacity-0 before:opacity-0"
            }`}
            variants={containerCloudVariants}
            animate={isFocus ? "focused" : "unfocused"}
          >
            {!isFocus && (
              <p className="text-[14px] font-urbanist font-medium">
                Si necesitas algo, ¡estoy aquí para ayudarte!
              </p>
            )}

            {isFocus && (
              <div className="flex flex-col h-[80%]">
                <div className="px-[60px] pt-[20px] hidden md:block">
                  <button
                    className="size-[40px] rounded-full border border-white flex items-center justify-center"
                    onClick={() => setIsFocus(false)}
                  >
                    <ArrowDropDown size={30} />
                  </button>
                </div>
                {!messages && <EmptyChat sendMessage={sendMessage} />}
                {messages && <Messages messages={messages} />}
              </div>
            )}
          </motion.div>
        </div>
      </motion.div>
      {isChatVisible && <FloatingBot />}
    </>
  );
};
