import { IService } from "@/interfaces/IService";
import { FC } from "react";


export const CardService: FC<IService> = ({ title, content, children }) => {
    return (
      <div className="bg-card-service border-t-[0.5px] border-t-[#999999] h-[447px] w-[320px] rounded-[40px] flex flex-col justify-start items-center">
        {children}
        <div className="flex flex-col justify-center items-center text-center">
          <h3 className="text-inside-green text-xl mb-5">{title}</h3>
          <p className="font-futura text-base w-4/5">{content}</p>
        </div>
      </div>
    );
  };