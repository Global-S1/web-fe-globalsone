import { ArrowSend } from "@/assets/icons/arrow-send";
import { LoaderDots } from "@/shared/components/loader/loader-dots.component";
import Image from "next/image";
import { ChangeEvent } from "react";

interface Props {
  instantsMessages: string[];
  sendInstantMessage: (message: string) => void;
  haveMessage: boolean;
  isLoading: boolean;
  input: string;
  onChangeInput: (e: ChangeEvent<HTMLInputElement>) => void;
  handleEnter: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  handleSend: () => void;
}

export const ChatBotInput = ({
  instantsMessages,
  sendInstantMessage,
  haveMessage,
  isLoading,
  input,
  onChangeInput,
  handleEnter,
  handleSend,
}: Props) => {
  return (
    <div>
      <div className="flex flex-col items-end gap-2 mb-2">
        {!haveMessage &&
          instantsMessages.map((message, index) => (
            <button
              key={index}
              className="bg-[#2f2e69] border-[3px] border-[#ffffff88] rounded-[44px] text-right text-[14px] font-futura font-semibold w-fit px-[12px] py-[8px] hover:bg-[#2f2e6988] duration-150"
              onClick={() => sendInstantMessage(message)}
            >
              {message}
            </button>
          ))}
      </div>
      <div className="flex gap-1">
        {isLoading && (
          <div className="flex items-center justify-center w-full">
            <LoaderDots scale={0.6} />
          </div>
        )}
        {!isLoading && (
          <>
            <label
              htmlFor="input-chat"
              className="flex items-center px-[15px] bg-white border-[3px] border-[#D2CCE1] rounded-[10px] grow"
            >
              <Image
                src={"/develop/chat-bot/bot-icon.svg"}
                alt="icon"
                width={25}
                height={25}
              />
              <input
                type="text"
                placeholder="Escríbenos, ¿Cómo podemos ayudarte?"
                id="input-chat"
                className="border-none bg-transparent outline-none font-futura font-medium text-black w-full placeholder:font-semibold"
                value={input}
                onChange={onChangeInput}
                onKeyDown={handleEnter}
              />
            </label>
            <div
              className="bg-[#544DD2] rounded-full size-[40px] shrink-0"
              onClick={handleSend}
            >
              <ArrowSend />
            </div>
          </>
        )}
      </div>
    </div>
  );
};
