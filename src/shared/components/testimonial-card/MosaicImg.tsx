import Image from "next/image";
import clsx from "clsx";
import { FC } from "react";

interface Prop{
    pictures: any[]
}

export const MosaicImg:FC<Prop> = ({pictures}) => {
    const sBaseSliceContainer = "flex flex-col space-y-3 xl:space-y-8"
    const sBaseSliceImgItem = "w-[70px] sm:w-[90px] md:w-[150px] lg:w-[225px] h-[55.42px] sm:h-[75px] md:h-[130px] lg:h-[145.65px] object-cover rounded-[21px] sm:rounded-[25px]"
    return (
      <div className="flex space-x-4 sm:mt-2 mr-2 sm:mr-5">
        <div className={clsx(sBaseSliceContainer, "hidden sm:block" )}>
          {pictures.slice(0, 2).map((item, index) => {
            return (
              <div
                key={index}
                className={clsx("flex justify-center items-center")}
              >
                <Image
                  src={item.img}
                  alt={item.alt}
                  className={clsx(sBaseSliceImgItem)}
                />
              </div>
            );
          })}
        </div>
        <div className={clsx(sBaseSliceContainer, "mt-8")}>
          {pictures.slice(2, 5).map((item, index) => {
            return (
              <div
                key={index}
                className={clsx(
                  "flex justify-center items-center"
                )}
              >
                <Image
                  src={item.img}
                  alt={item.alt}
                  className={clsx(sBaseSliceImgItem)}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  };