import { ActionButton } from "../action-button";
import { ModalWindow } from "../modal-window";
import s from "./thanks-modal.module.css";

export const ThanksModal = ({
  title,
  description,
  socialMedia,
}: ISuccessContent) => {
  return (
    <ModalWindow>
      <div className={s.message__container}>
        <h2>{title}</h2>
        <p>{description}</p>
        <ActionButton text="Ver Nuestros Proyectos" />
        <span>{socialMedia.title}</span>
        <div className={s.icons__container}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </ModalWindow>
  );
};
