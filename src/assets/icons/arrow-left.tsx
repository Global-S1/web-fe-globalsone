import { IIcondProps } from "./config";

export const ArrowLeft = ({ size = 50 }: IIcondProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width={size}
      height={size}
    >
      <polyline
        points="60,20 20,50 60,80"
        fill="none"
        stroke="white"
        strokeWidth="10"
      />
      <line x1="20" y1="50" x2="80" y2="50" stroke="white" strokeWidth="10" />
    </svg>
  );
};
