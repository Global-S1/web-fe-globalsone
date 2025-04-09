"use client";

import { motion, Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface Props {
  messages: string[];
  sendMessages: (message: string) => void;
}

export const InstantMessages = ({ messages, sendMessages }: Props) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [isAllLeft, setIsAllLeft] = useState<boolean>(false);
  const [isAllRight, setIsAllRight] = useState<boolean>(false);

  const buttonVariants = (index: number): Variants => ({
    hidden: {
      scale: 0.2,
    },
    visible: {
      scale: 1,
      transition: {
        duration: 0.4,
        delay: index * 0.2,
        type: "spring",
        stiffness: 300,
        damping: 10,
      },
    },
  });

  useEffect(() => {
    const container = contentRef.current;
    if (container) {
      container.scrollLeft = 0;
    }
  }, [contentRef.current?.scrollWidth, contentRef.current?.clientWidth]);
  return (
    <div className="flex relative">
      <div
        ref={contentRef}
        className="flex gap-4 w-full overflow-x-auto scrollbar-hidden"
      >
        {messages.map((message, index) => (
          <motion.button
            key={index}
            variants={buttonVariants(index)}
            initial="hidden"
            animate="visible"
            className="rounded-[50px] px-[13px] md:px-[70px] py-[10px] shrink-0 bg-[#B14DFF40] border-2 border-[#ffffff88] hover:border-white duration-100 font-urbanist font-medium text-[14px] md:text-[20px] "
            onClick={() => sendMessages(message)}
          >
            {message}
          </motion.button>
        ))}
      </div>
    </div>
  );
};
