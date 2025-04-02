import { ArrowLeft } from "@/assets/icons/arrow-left";
import Link from "next/link";
import { ChatSystem } from "./components/chat-system/chat-system";

export default async function ChatBot() {
  return (
    <div className="w-full h-screen pt-[80px] pb-4 mb-12 flex flex-col">
      <div>
        <Link
          href={"/"}
          className="border rounded-[26px] border-white py-2 px-4 flex items-center gap-2 hover:shadow-md hover:shadow-white bg-transparent duration-150 w-fit"
        >
          <ArrowLeft size={20} />

          <span className="underline font-futura font-medium">Regresar</span>
        </Link>
      </div>

      <ChatSystem />
    </div>
  );
}
