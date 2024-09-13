import { StaticImageData } from "next/image";

export interface IFeatures {
  title: any;
  content: string;
  direction?: "left" | "right";
  img?: string | StaticImageData;
  bg?: string | StaticImageData;
  right?: boolean;
  left?: boolean;
}
