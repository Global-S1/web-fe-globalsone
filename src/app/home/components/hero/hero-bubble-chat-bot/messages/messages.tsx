"use client";

import { IMessage } from "@/app/chat-bot/interfaces/chat-bot.interface";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Markdown from "react-markdown";

interface Props {
  messages: IMessage[];
}

export const Messages = ({ messages }: Props) => {
  const chatRef = useRef<HTMLDivElement>(null);
  const [isAtTop, setIsAtTop] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(true);

  useEffect(() => {
    const chatContainer = chatRef.current;
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  }, [messages]);

  const handleScroll = () => {
    const chatContainer = chatRef.current;
    if (chatContainer) {
      const { scrollTop, scrollHeight, clientHeight } = chatContainer;
      setIsAtTop(scrollTop === 0);
      setIsAtBottom(scrollTop + clientHeight >= scrollHeight - 1);
    }
  };
  return (
    <div className="grow w-[85%] m-auto overflow-auto relative scrollbar-hidden my-2">
      {!isAtTop && (
        <div className="absolute top-0 left-0 right-0 h-10 pointer-events-none bg-gradient-to-b from-[#ffffff44] to-transparent z-10"></div>
      )}

      <div
        className="max-h-full flex flex-col gap-4 overflow-auto scrollbar-hidden"
        ref={chatRef}
        onScroll={handleScroll}
      >
        {messages.map((mess, index) => {
          if (mess.sender == "user") {
            return (
              <motion.div
                key={mess.id}
                className="w-full  flex items-center justify-end"
                initial={{ x: "10%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: index * 0.2,
                }}
              >
                <p className="max-w-[60vw] py-[10px] px-[30px] bg-white rounded-[75px] text-wrap text-black font-urbanist font-medium overflow-hidden">
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
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: index * 0.2,
                }}
                key={mess.id}
                className="flex gap-2 items-start max-w-[90%]"
              >
                <motion.img
                  src={"/develop/chat-bot/bot-in-chat.svg"}
                  alt="icon"
                  className="size-[22px] mt-[2px]"
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
  );
};
