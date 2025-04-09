import { IIcondProps } from "./config";

export const ArrowDropDown = ({ size = 50, className }: IIcondProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M6 9l6 6 6-6"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="bevel"
      />
    </svg>
  );
};
