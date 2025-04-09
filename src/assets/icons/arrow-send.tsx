import React from "react";
import { IIcondProps } from "./config";

export const ArrowSend = ({ size, className }: IIcondProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={className}
    >
      <polygon points="40,30 70,50 40,70 50,50" fill="white" />
    </svg>
  );
};
