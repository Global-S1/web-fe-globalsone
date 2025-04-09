import { useEffect, useRef } from "react";
import { IMessage } from "@/app/home/interfaces/message.interface";
import { ROOT_PATH } from "@/shared/constants/url";
import { motion } from "framer-motion";
import Markdown from "react-markdown";

interface Props {
  messages: IMessage[];
}

export const Messages = ({ messages }: Props) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="grow w-[85%] m-auto overflow-auto relative scrollbar-hidden my-2">
      <div
        className="max-h-full flex flex-col gap-4 overflow-auto scrollbar-hidden relative"
        ref={containerRef}
      >
        {messages.map((mess) => {
          if (mess.sender == "user") {
            return (
              <motion.div
                key={mess.id}
                className="w-full flex items-center justify-end"
                initial={{ x: "10%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
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
                }}
                key={mess.id}
                className="flex gap-2 items-start max-w-[90%]"
              >
                <motion.img
                  src={`${ROOT_PATH}/chat-bot/bot-in-chat.svg`}
                  alt="icon"
                  className="size-[22px] mt-[2px]"
                />
                <div>
                  <Markdown
                    components={{
                      a: (e) => (
                        <a
                          href={e.href}
                          className="underline bg-gradient-to-b from-[#19DBCA] to-[#6C6EF0] bg-clip-text text-transparent font-semibold"
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
    </div>
  );
};
