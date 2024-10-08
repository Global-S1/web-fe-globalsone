import { IInside } from "@/app/home/interfaces/content.interface";
import { IInsideInput } from "../interfaces/insides.interface";

export const insideAdapter = (dataInput: IInsideInput): IInside => {
  return { metrics: Object.values(dataInput) };
};
