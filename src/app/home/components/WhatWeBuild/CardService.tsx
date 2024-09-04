import { FC } from "react";
import clsx from "clsx";
import Image, { StaticImageData } from "next/image";

enum ColumSpan {
  One = 1,
  Two = 2,
  Three = 3,
  Four = 4,
  Five = 5,
  Six = 6,
  Seven = 7,
  Eight = 8,
  Nine = 9,
  Ten = 10,
  Eleven = 11,
  Twelve = 12,
}

interface Prop {
  title: string;
  content: string;
  image: string | StaticImageData; 
  altContent: string;
  ColumSpan?: ColumSpan;
  isLast: boolean;
}

const columnSize: Record<ColumSpan, string> = {
    [ColumSpan.One]: "col-span-12 sm:col-span-6 xl:col-span-1",
    [ColumSpan.Two]: "col-span-12 sm:col-span-6 xl:col-span-2",
    [ColumSpan.Three]: "col-span-12 sm:col-span-6 xl:col-span-3",
    [ColumSpan.Four]: "col-span-12 sm:col-span-6 xl:col-span-4",
    [ColumSpan.Five]: "col-span-12 sm:col-span-6 xl:col-span-5",
    [ColumSpan.Six]: "col-span-12 sm:col-span-6 xl:col-span-6",
    [ColumSpan.Seven]: "col-span-12 sm:col-span-6 xl:col-span-7",
    [ColumSpan.Eight]: "col-span-12 sm:col-span-6 xl:col-span-8",
    [ColumSpan.Nine]: "col-span-12 sm:col-span-6 xl:col-span-9",
    [ColumSpan.Ten]: "col-span-12 sm:col-span-6 xl:col-span-10",
    [ColumSpan.Eleven]: "col-span-12 sm:col-span-6 xl:col-span-11",
    [ColumSpan.Twelve]: "col-span-12 sm:col-span-6 xl:col-span-12",
};

const CardService: FC<Prop> = ({
  title,
  content,
  image,
  altContent,
  ColumSpan,
  isLast,
}) => {
  const gridDefaultProperties = "col-span-12 sm:col-span-6 xl:col-span-4";
  const gridClass = columnSize[ColumSpan!] || gridDefaultProperties;
  const styleConfig = "rounded-2xl border border-[#f4f4f500] bg-cards-producs xl:h-[487.17px]";
  const lastItemClass = isLast ? "sm:col-span-12" : "";
  console.log

  return (
    <div className={clsx(gridClass, styleConfig, lastItemClass, " ")}>
      <div className="min-w-[157px] min-h-[138px] w-full h-auto sm:flex sm:justify-center xl:h-[300px]">
        <Image src={image} alt={altContent} />
      </div>
      <div className="p-5 text-center">
        <h3 className="mb-3 mt-4 text-large xl:text-title-10 xl:leading-[40px]">{title}</h3>
        {/* <p className="text-base font-futura sm:hidden">{content}</p> */}
      </div>
    </div>
  );
};

export default CardService;
