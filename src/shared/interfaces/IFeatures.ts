import { StaticImageData } from "next/image";

export interface IFeatures {
  title: { text: string; style: string | null }[];
  content: string;
  direction?: "left" | "right";
  img?: string | StaticImageData;
  bg?: string | StaticImageData;
  right?: boolean;
  left?: boolean;
}
