import { IService } from "@/interfaces/IService";
import { FC } from "react";


export const CardService: FC<IService> = ({ title, content, children }) => {
    return (
      <div className="bg-card-service border-t-[0.5px] border-t-[#999999] h-[200.3px] sm:h-[350px] xl:h-[447px] w-[200.3px] sm:w-full sm:max-w-[343px] rounded-[40px] flex flex-col justify-center items-center sm:px-3">
        <div className=" w-[75%] ">
          
        {children}
        </div>
        <div className="flex flex-col justify-center items-center text-center -mt-2 sm:mt-2 ">
          <h3 className="text-inside-green text-[15px] xl:text-[24px] xl:mb-5 ">{title}</h3>
          <p className="font-futura text-[11px] xl:text-medium w-4/5 leading-[16.5px] xl:leading-[33px]">{content}</p>
        </div>
      </div>
    );
  };