"use client";

import { motion } from "framer-motion";
import { IMessage } from "../../interfaces/chat-bot.interface";

interface Props {
  messages?: IMessage[];
}

export const ChatBotMessages = ({ messages }: Props) => {
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
              alt="Animated Icon"
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
        <div className="grow bg-red-300">Mensajes</div>
      )}
    </>
  );
};
