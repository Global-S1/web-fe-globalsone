"use client";
import { AlertForm } from "@/shared/animations/alert-form-animation";
import { ActionButton } from "@/shared/components/action-button";
import { ModalWindow } from "@/shared/components/modal-window";
import { Section } from "@/shared/components/section";
import { useEffect, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { IContactUsFormContent } from "../../interfaces/content.interface";
import s from "./contact-form.module.css";

export const ContactForm = ({
  title,
  content,
  services,
  terms,
}: IContactUsFormContent) => {
  const [alertActive, setAlertActive] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };
  useEffect(() => {
    console.log("error", errors);
    setAlertActive(Object.values(errors).length > 0);
  }, [errors]);
  return (
    <Section extendStyle={s.section__from}>
      {alertActive && <AlertForm />}
      <ModalWindow active>
        <div className={s.form__container}>
          <div className={s.form__text__container}>
            <h2>{title}</h2>
            <p>{content}</p>
          </div>

          <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={s.inputs__grid}>
              <input
                type="text"
                placeholder="Nombre"
                {...register("firstname", { required: true })}
              />
              <input
                type="text"
                placeholder="Apellido"
                {...register("lastname", { required: true })}
              />
              <input
                type="text"
                placeholder="Email"
                {...register("email", { required: true })}
              />
              <input
                type="text"
                placeholder="Numero de Telefono"
                {...register("phone", { required: true })}
              />
              <select
                id=""
                className={s.select__container}
                {...register("service", { required: true })}
              >
                {services.map((item, index) => (
                  <option value={item} key={index}>
                    {item}
                  </option>
                ))}
              </select>
              <textarea
                placeholder="Escribe el mensaje que deseas enviarnos..."
                {...register("message")}
              />
            </div>

            <div className={s.submit__container}>
              <div className={s.terms_container}>
                <input
                  type="checkbox"
                  {...register("terms", { required: true })}
                />
                <label htmlFor="">{terms}</label>
              </div>

              <ActionButton
                text="Enviar Mensaje"
                extendStyle={s.button__form}
                type="submit"
              />
            </div>
          </form>
        </div>
      </ModalWindow>
    </Section>
  );
};
