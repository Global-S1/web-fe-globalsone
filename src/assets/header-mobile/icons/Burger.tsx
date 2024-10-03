import { CSSProperties, FC } from "react";

interface Prop {
  style?: CSSProperties;
}

export const Burger: FC<Prop> = ({ style }) => {
  return (
    <svg
      width="27"
      height="21"
      viewBox="0 0 27 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
    >
      <g opacity="0.8">
        <path
          d="M0 1.5C0 0.671573 0.671573 0 1.5 0H25.5C26.3284 0 27 0.671573 27 1.5C27 2.32843 26.3284 3 25.5 3H1.5C0.671574 3 0 2.32843 0 1.5Z"
          fill="white"
          style={{ mixBlendMode: "screen" }}
        />
      </g>
      <g opacity="0.8">
        <path
          d="M0 7.5C0 6.67157 0.671573 6 1.5 6H25.5C26.3284 6 27 6.67157 27 7.5C27 8.32843 26.3284 9 25.5 9H1.5C0.671574 9 0 8.32843 0 7.5Z"
          fill="white"
          style={{ mixBlendMode: "screen" }}
        />
      </g>
      <g opacity="0.8">
        <path
          d="M0 19.5C0 18.6716 0.671573 18 1.5 18H25.5C26.3284 18 27 18.6716 27 19.5C27 20.3284 26.3284 21 25.5 21H1.5C0.671574 21 0 20.3284 0 19.5Z"
          fill="white"
          style={{ mixBlendMode: "screen" }}
        />
      </g>
      <path
        opacity="0.8"
        d="M0 13.5C0 12.6716 0.671573 12 1.5 12H25.5C26.3284 12 27 12.6716 27 13.5C27 14.3284 26.3284 15 25.5 15H1.5C0.671574 15 0 14.3284 0 13.5Z"
        fill="white"
      />
    </svg>
  );
};
