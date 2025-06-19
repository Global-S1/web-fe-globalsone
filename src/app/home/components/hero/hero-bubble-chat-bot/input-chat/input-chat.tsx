import { motion, Variants } from "framer-motion";
import { ChangeEvent, Dispatch } from "react";
import s from "./input-chat.module.css";
import { LoaderDots } from "@/shared/components/loader/loader-dots.component";
import { ArrowSend } from "@/assets/icons/arrow-send";
import { ROOT_PATH } from "@/shared/constants/url";

interface Props {
  input: string;
  setInput: Dispatch<string>;
  isFocus: boolean;
  setIsFocus: Dispatch<boolean>;
  isLoading: boolean;
  sendMessage: (value: string) => void;
}

export const InputChat = ({
  input,
  setInput,
  isFocus,
  sendMessage,
  isLoading,
  setIsFocus,
}: Props) => {
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

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const iconVariants: Variants = {
    focused: {
      opacity: 0,
      scale: 0,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 300,
        damping: 10,
      },
      width: 0,
    },
    unfocused: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  const inputSectionVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={inputSectionVariants}
      className={`border-[2px] border-[rgba(25,219,202,.7)] rounded-[12px_20px_20px_12px] bg-[#ffffff11] flex items-center justify-between w-full mx-auto relative z-[20]  ${
        isFocus && "max-w-[80%] transition-all duration-150"
      }`}
    >
      <label
        htmlFor="chat-input"
        className="relative flex items-center py-[4px] pl-[10px] w-full"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1, transition: { duration: 0.5 } }}
          className="relative"
        >
          <div className={`${!isFocus && "pl-2 duration-100"}`}>
            <motion.img
              src={`${ROOT_PATH}/chat-bot/bot-in-chat.svg`}
              alt="chatbot-image"
              variants={iconVariants}
              animate={isFocus ? "focused" : "unfocused"}
              className="size-[30px] md:size-[45px]"
            />
          </div>
        </motion.div>
        <input
          id="chat-input"
          type="text"
          placeholder="Escríbenos, ¿cómo podemos ayudarte?"
          className={`${s.input__input} focus:border-transparent focus:ring-0 placeholder:text-white`}
          value={input}
          onChange={onChangeInput}
          onKeyDown={(e) => {
            !isLoading && handleKeyDown(e);
          }}
          onFocus={() => setIsFocus(true)}
        />
      </label>
      <button
        className={`px-[16px] bg-[#544DD2] hover:bg-[#544ddf] duration-200 rounded-[30px] text-nowrap h-[40px] mr-4`}
        onClick={() => {
          !isLoading && handleSend();
        }}
      >
        {isLoading ? (
          <LoaderDots scale={0.4} />
        ) : (
          <>
            <span className="font-urbanist font-medium">
              {isFocus ? (
                <ArrowSend className="size-[30px]" />
              ) : (
                "Hablemos ahora"
              )}
            </span>
          </>
        )}
      </button>
    </motion.div>
  );
};
