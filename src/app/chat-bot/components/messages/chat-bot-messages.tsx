"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Markdown from "react-markdown";
import { IMessage } from "../../interfaces/chat-bot.interface";
import Image from "next/image";

interface Props {
  messages?: IMessage[];
}

export const ChatBotMessages = ({ messages }: Props) => {
  const chatRef = useRef<HTMLDivElement>(null);
  const [isAtTop, setIsAtTop] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(true);

  useEffect(() => {
    const chatContainer = chatRef.current;
    if (chatContainer) {
      // Inicializa el scroll al final
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  }, [messages]);

  const handleScroll = () => {
    const chatContainer = chatRef.current;
    if (chatContainer) {
      const { scrollTop, scrollHeight, clientHeight } = chatContainer;
      setIsAtTop(scrollTop === 0);
      setIsAtBottom(scrollTop + clientHeight >= scrollHeight - 1); // Ajuste para imprecisión flotante
    }
  };
  return (
    <>
      {(!messages || messages?.length == 0) && (
        <div className="grow">
          <div className="size-[100px] relative flex items-center justify-center mx-auto">
            <motion.div
              className="absolute rounded-[50%] bg-white size-full"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <motion.img
              src="/chat-bot/bot-icon.svg"
              alt="con"
              className="size-[70px] z-[1]"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
          <div className="mt-4 w-full">
            <p className="text-center font-futura font-semibold text-xl ">
              Pregúntame lo que sea
            </p>
          </div>
        </div>
      )}
      {messages && messages?.length > 0 && (
        <div className="relative max-h-[calc(100%-100px)] grow">
          {!isAtTop && (
            <div className="absolute top-0 left-0 right-0 h-10 pointer-events-none bg-gradient-to-b from-[#0E032A88] to-transparent z-10"></div>
          )}

          <div
            className="max-h-full flex flex-col gap-4 overflow-auto scrollbar-hidden"
            ref={chatRef}
            onScroll={handleScroll}
          >
            {messages.map((mess) => {
              if (mess.sender == "user") {
                return (
                  <motion.div
                    key={mess.id}
                    className="w-full  flex items-center justify-end"
                    animate={{ opacity: 1 }}
                  >
                    <p className="max-w-[60vw] py-[10px] px-[30px] bg-white rounded-[75px] text-wrap text-black font-medium overflow-hidden">
                      {mess.text}
                    </p>
                  </motion.div>
                );
              }

              if (mess.sender == "bot") {
                return (
                  <motion.div
                    initial={{ x: "-10%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    key={mess.id}
                    className="flex gap-2"
                  >
                    <Image
                      src={"/chat-bot/bot-in-chat.svg"}
                      alt="icon"
                      height={20}
                      width={20}
                    />
                    <div>
                      <Markdown
                        components={{
                          a: (e) => (
                            <a
                              href={e.href}
                              className="undeline bg-gradient-to-b from-[#19DBCA] to-[#6C6EF0] bg-clip-text text-transparent font-semibold"
                            >
                              {e.children}
                            </a>
                          ),
                          p: (e) => (
                            <p className="font-medium text-lg">{e.children}</p>
                          ),
                        }}
                      >
                        {mess.text}
                      </Markdown>
                    </div>
                  </motion.div>
                );
              }
            })}
          </div>

          {!isAtBottom && (
            <div className="absolute -bottom-1 left-0 right-0 h-8 pointer-events-none bg-gradient-to-t from-[#0E032A88] to-transparent z-10"></div>
          )}
        </div>
      )}
    </>
  );
};
