"use client";
import { ActionButton } from "@/shared/components/action-button";
import { ModalWindow } from "@/shared/components/modal-window";
import { Section } from "@/shared/components/section";
import { SubmitHandler, useForm } from "react-hook-form";
import { IContactUsFormContent } from "../../interfaces/content.interface";
import s from "./contact-form.module.css";
import { sendFormRequirementService } from "../../service/form.service";
import { useRouter } from "next/navigation";
import { IForm } from "../../interfaces/contact-form";
import Link from "next/link";

export const ContactForm = ({
  title,
  content,
  services,
  terms,
}: IContactUsFormContent) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>();
  const router = useRouter();
  const onSubmit: SubmitHandler<IForm> = async (data) => {
    try {
      const status = await sendFormRequirementService(data);
      console.log("envio exitoso", status);
      if (status === 201) {
        router.push("/success");
      }
    } catch (error) {}
  };

  return (
    <Section extendStyle={s.section__from}>
      {Object.values(errors).length > 0 && (
        <div className={s.alert}>
          <p>{`Hay un error en el campo “${Object.keys(errors).join(
            ", "
          )}” . Por favor, de revisar y llenar el campo.`}</p>
        </div>
      )}
      <div className={s.magenta__circle}></div>
      <ModalWindow active color={"#1a2660"}>
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
                {...register("name", { required: true })}
              />
              <input
                type="text"
                placeholder="Apellido"
                {...register("lastName", { required: true })}
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
                {...register("requirements", {
                  required: true,
                  validate: (value) =>
                    value !== "-" || "Por favor, selecciona una opción válida",
                })}
              >
                <option value="">Selecciona tipo de proyecto</option>
                {services.map((item, index) => (
                  <option value={item} key={index}>
                    {item}
                  </option>
                ))}
              </select>
              <textarea
                placeholder="Escribe el mensaje que deseas enviarnos..."
                {...register("desacription")}
              />
            </div>

            <div className={s.submit__container}>
              <div className={s.terms_container}>
                <input
                  type="checkbox"
                  {...register("terms", { required: true })}
                />
                <label htmlFor="">
                  {terms.map((term, index) =>
                    term.highlight ? (
                      <Link
                        key={index}
                        href={"/terms-conditions"}
                        style={{ textDecoration: "underline" }}
                      >
                        {term.text}
                      </Link>
                    ) : (
                      <span key={index}>{term.text} </span>
                    )
                  )}
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
