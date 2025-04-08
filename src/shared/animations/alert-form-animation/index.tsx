import s from "./alert-form-animation.module.css";

export const AlertForm = () => {
  return (
    <div className={s.alert}>
      <p>{`Hay un error en el campo “” . Por favor, de revisar y llenar el campo.`}</p>
    </div>
  );
};
