import Image from "next/image";
import s from "./carrucel-slice.module.css";
import clsx from "clsx";
import React from "react";

export const Slice = React.forwardRef<
  HTMLDivElement,
  { src: string; name: string; jobTitle: string; isCentral: boolean }
>(({ src, name, jobTitle, isCentral }, ref) => {
  return (
    <div
      ref={ref}
      className={clsx(s.slice, "carrusel", { [s.central]: isCentral })}
    >
      <Image src={src} alt={`${name} ${jobTitle}`} width={100} height={200} />
      <div className={s.label_image}>
        <h3>{name}</h3>
        <p>{jobTitle}</p>
      </div>
    </div>
  );
});

Slice.displayName = "Slice";
