import Image from "next/image";
import s from "./slice.module.css";

export const Slice = ({ name, src }) => {
  return (
    <div className="slice__container__custom">
      <div className="slice__float__container">
        <div className={s.slice__body__container}>
          <Image src={src} alt={name} width={100} height={100} />
          <div className="slice__body__title">
            <h3>{name}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
