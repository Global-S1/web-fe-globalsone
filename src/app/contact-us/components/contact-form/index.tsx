"use client";
import { ModalWindow } from "@/shared/components/modal-window";
import { Section } from "@/shared/components/section";
import { SubmitHandler, useForm } from "react-hook-form";
import { IContactUsFormContent } from "../../interfaces/content.interface";
import s from "./contact-form.module.css";
import { sendFormRequirementService } from "../../service/form.service";
import { useRouter } from "next/navigation";
import { IForm } from "../../interfaces/contact-form";
import Link from "next/link";
import { useEffect, useState } from "react";
import clsx from "clsx";
import errorMessages from "@/lang/es/translation.json";
import countriesList from "@/wp-mock-data/countries.json";
import { SelectCountry } from "./components/select-country";
import { SelectRequirement } from "./components/select-requirement";

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
    setValue,
    control,
    watch,
  } = useForm<IForm>();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onSubmit: SubmitHandler<IForm> = async (data) => {
    setLoading(true);
    data.phone = `${data.prefix}${data.phone}`;
    const { prefix, ...formattedData } = data;
    try {
      const status = await sendFormRequirementService(formattedData);
      localStorage.removeItem("email");
      if (status === 201) {
        router.push("/success");
      }
    } catch (error) {
      console.error("Error sending form:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    if (storedEmail) {
      setValue("email", storedEmail);
    }

    return () => {
      localStorage.removeItem("email");
    };
  }, []);

  return (
    <Section extendStyle={s.section__from}>
      {Object.values(errors).length > 0 && (
        <div className={s.alert}>
          <p>{`Hay un error en el campo “${Object.keys(errors)
            .map(
              (key) =>
                errorMessages.errors[
                  key as keyof typeof errorMessages.errors
                ] || key
            )
            .join(", ")}” . Por favor, de revisar y llenar el campo.`}</p>
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
                placeholder="Nombre (s)"
                {...register("name", { required: true })}
              />
              <input
                type="text"
                placeholder="Apellidos"
                {...register("lastName", { required: true })}
              />
              <input
                type="text"
                placeholder="Email"
                {...register("email", {
                  required: true,
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message:
                      "Por favor, introduce un correo electrónico válido.",
                  },
                })}
              />

              <SelectCountry register={register} setValue={setValue} />

              <SelectRequirement
                register={register}
                setValue={setValue}
                services={services}
                errors={errors}
              />

              <textarea
                placeholder="Escribe el mensaje que deseas enviarnos..."
                {...register("description", { required: true })}
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
                        href={term.link ? term.link : "/terms-conditions"}
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

              <button
                className={clsx(
                  s.button__base__styles,
                  loading ? s.button__form__loading : s.button__form
                )}
                type="submit"
              >
                {loading ? <div className={s.loader}></div> : "Enviar Mensaje"}
              </button>
            </div>
          </form>
        </div>
      </ModalWindow>
    </Section>
  );
};
