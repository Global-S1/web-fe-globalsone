"use client";

import { motion } from "framer-motion";
import s from "./hero.bubble-chat-bot.module.css";
import Image from "next/image";
import { ELocalStorage } from "@/shared/enums/local-storage.enum";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

export const HeroBubbleChatBot = () => {
  const [input, setInput] = useState<string>("");
  const router = useRouter();
  const messageVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const inputSectionVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const instantMessageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  };

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const sendMessage = (message: string) => {
    localStorage.setItem(ELocalStorage.TEMPORAL_MESSAGE, message);
    router.push("/chat-bot?message=true");
  };

  const handleSend = () => {
    if (input.trim() !== "") {
      sendMessage(input.trim());
      setInput("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  const messages = [
    "Ver nuestros servicios",
    "¿Quiénes somos?",
    "Nuestros casos de éxito",
    "Contacto",
  ];

  return (
    <div className={s.container__master}>
      <div className={s.container__items}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={inputSectionVariants}
          className={s.input__container}
        >
          <label htmlFor="chat-input" className={s.input__with__icon}>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1, transition: { duration: 0.5 } }}
              className={s.input__icon__container}
            >
              <motion.div className={s.input__icon__cloud}>
                <p>Si necesitas algo, ¡estoy aquí para ayudarte!</p>
              </motion.div>
              <Image
                src={"/develop/chat-bot/bot-icon.svg"}
                alt="chatbot-image"
                width={30}
                height={30}
              />
            </motion.div>
            <input
              id="chat-input"
              type="text"
              placeholder="Escríbenos..."
              className={s.input__input}
              value={input}
              onChange={onChangeInput}
              onKeyDown={handleKeyDown}
            />
          </label>
          <button className={s.input__button} onClick={handleSend}>
            Hablemos ahora
          </button>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={messageVariants}
          className={s.instant__message__container}
        >
          {messages.map((message, index) => (
            <motion.button
              key={index}
              initial="hidden"
              animate={{
                opacity: 1,
                scale: 1,
                transition: { duration: 0.3, delay: 0.4 * index },
              }}
              variants={instantMessageVariants}
              className={s.instant__message}
              onClick={() => sendMessage(message)}
            >
              {message}
            </motion.button>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
