import { StaticImageData } from "next/image";

export interface ITitleData {
  title: string;
  bg: string | StaticImageData;
  direction?: "left" | "right";
}
