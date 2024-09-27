"use client";
import { ModalWindow } from "@/shared/components/modal-window";
import { Section } from "@/shared/components/section";
import { useForm, SubmitHandler } from "react-hook-form";
import s from "./contact-form.module.css";
import formData from "@/data-mock/form-data.json";
import { ActionButton } from "@/shared/components/action-button";

interface IFormInputs {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => data;

  return (
    <Section extendStyle={s.section__from}>
      <ModalWindow active>
        <div className={s.form__container}>
          <div className={s.form__text__container}>
            <h2>{formData.data.title}</h2>
            <p>{formData.data.content}</p>
          </div>

          <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={s.inputs__grid}>
              <input
                type="text"
                placeholder="Nombre"
                {...register("firsname")}
              />
              <input
                type="text"
                placeholder="Apellido"
                {...register("lastname")}
              />
              <input type="text" placeholder="Email" {...register("email")} />
              <input
                type="text"
                placeholder="Numero de Telefono"
                {...register("phone")}
              />
              <select
                id=""
                className={s.select__container}
                {...register("service")}
              >
                {formData.data.services.map((item, index) => (
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
                <input type="checkbox" />
                <label htmlFor="">
                  I agree with Terms of Use and Privacy Policy
                </label>
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
