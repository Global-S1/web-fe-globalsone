import { IIcondProps } from "./config";

interface Props extends IIcondProps {
  scale?: number;
}

export const Triangle = ({ className, size, scale }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      scale={scale}
    >
      <polygon
        points="10,10 60,50 10,90"
        fill="#dce7ee"
        className={className}
        width={size}
        height={size}
      />
    </svg>
  );
};
