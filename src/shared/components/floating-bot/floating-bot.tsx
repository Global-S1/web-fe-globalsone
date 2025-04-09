"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import s from "./floating-bot.module.css";
import { usePathname, useRouter } from "next/navigation";

interface Props {
  className?: string;
}

export const FloatingBot = ({ className }: Props) => {
  const router = useRouter();
  const pathName = usePathname();

  const handleButtonClick = () => {
    if (pathName === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      router.push("/");
      const timer = setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        clearTimeout(timer);
      }, 2000);
    }
  };

  return (
    <motion.button
      className={s.container + " " + className}
      onClick={handleButtonClick}
    >
      <Image
        src={"/develop/chat-bot/bot-white.svg"}
        alt="bot"
        width={40}
        height={40}
      />
    </motion.button>
  );
};
