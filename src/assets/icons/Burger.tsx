import { CSSProperties, FC } from "react";

interface Prop {
    style?: CSSProperties;
  }

export const Burger:FC<Prop> = ({style}) => {
  return (
    <svg
      width="27"
      height="20"
      viewBox="0 0 27 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
    >
      <line y1="1.5" x2="27" y2="1.5" stroke="white" strokeWidth="3" />
      <line y1="6.5" x2="27" y2="6.5" stroke="white" strokeWidth="3" />
      <line y1="12.5" x2="27" y2="12.5" stroke="white" strokeWidth="3" />
      <line y1="18.5" x2="27" y2="18.5" stroke="white" strokeWidth="3" />
    </svg>
  );
};
