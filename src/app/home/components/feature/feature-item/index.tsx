import { IFeature } from "@/app/home/interfaces/content.interface";
import clsx from "clsx";
import Image from "next/image";
import { FC } from "react";
import s from "./feature-item.module.css";

export const FeatureItem: FC<IFeature> = ({ title, content, reverse, img, pictureStyle  }) => {
  return (
    <div
      className={clsx(s.feature_container, {
        [s.reverse]: reverse,
      })}
    >
      <div className={s.feature_text_container}>
        <h3>
          {title.map((chunch, index) => {
            return (
              <span
                key={index}
                className={clsx(chunch.styles ? s[chunch.styles] : "")}
              >
                {chunch.text}
                {index < title.length - 1 && " "}
              </span>
            );
          })}
        </h3>
        <p>{content}</p>
      </div>
      <div className={s.feature_image_container}>
        <Image
          src={img || "/default-image.png"}
          alt="trabajando en equipo"
          className={clsx(s.right, { [s.left]: reverse }, pictureStyle)}
          width={300}
          height={300}
        />
      </div>
    </div>
  );
};
