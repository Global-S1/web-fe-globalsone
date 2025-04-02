import { ArrowSend } from "@/assets/icons/arrow-send";
import Image from "next/image";

interface Props {
  instantsMessages: string[];
  haveMessage: boolean;
  sendInstantMessage: (message: string) => void;
}

export const ChatBotInput = ({
  instantsMessages,
  haveMessage,
  sendInstantMessage,
}: Props) => {
  return (
    <div>
      <div className="flex flex-col items-end gap-2 mb-2">
        {instantsMessages.map((message, index) => (
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
        <label
          htmlFor="input-chat"
          className="flex items-center px-[15px] bg-white border-2 border-[#D2CCE1] rounded-[10px] grow"
        >
          <Image
            src={"/chat-bot/bot-icon.svg"}
            alt="chat-bot"
            width={25}
            height={25}
          />
          <input
            type="text"
            placeholder="Escríbenos..."
            id="input-chat"
            className="border-none bg-transparent outline-none font-futura font-medium text-black"
          />
        </label>
        <div className="bg-[#544DD2] rounded-full size-[40px] shrink-0">
          <ArrowSend />
        </div>
      </div>
    </div>
  );
};
