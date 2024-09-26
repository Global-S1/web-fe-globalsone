import Image from "next/image";
import clsx from "clsx";
import { FC } from "react";
import { IFeatures } from "@/shared/interfaces/IFeatures";
import s from "./feature-item.module.css";

export const FeatureItem: FC<IFeatures> = ({
  title,
  content,
  img,
  right,
  left,
}) => {
  return (
    <div
      className={clsx(s.feature_container, {
        "flex-row": left,
        "flex-row-reverse": right,
        "text-right": right,
      })}
    >
      <div className={s.feature_text_container}>
        <h3>
          {title.map((chunch, index) => {
            return (
              <span key={index} className={clsx(chunch.style ? s[chunch.style] : "")}>
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
          className={clsx(right ?? s.right, left ?? s.left)}
          width={300}
          height={300}
        />
      </div>
    </div>
  );
};
