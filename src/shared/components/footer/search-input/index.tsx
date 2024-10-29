"use client";
import { SendIcon } from "@/assets/footer/icons/SendIcon";
import { MailIcon } from "../mail-icon.tsx";
import s from "./search-input.module.css";
import Link from "next/link.js";
import { GlobalSLogo } from "@/assets/GlobalSLogo";
import { LogoMobile } from "@/assets/header/pictures/LogoMobile";
import { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
interface Prop {
  route: string;
}

interface FormInputs {
  email: string;
}

export const SearchInput: FC<Prop> = ({ route }) => {
  const { register, handleSubmit, reset } = useForm<FormInputs>();
  const router = useRouter();
  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    localStorage.setItem("email", data.email);
    router.push("/contact-us");
    reset();
  };

  return (
    <div className={s.search__section}>
      <Link href={route} className={s.logo__desk}>
        <GlobalSLogo />
      </Link>
      <div className={s.logo__mobile}>
        <LogoMobile />
      </div>
      <form className={s.search__container} onSubmit={handleSubmit(onSubmit)}>
        <div className={s.mail__icon}>
          <MailIcon />
        </div>
        <input
          type="text"
          placeholder="Ingresa tu email"
          className={s.input__search}
          {...register("email")}
        />
        <button type="submit" className={s.send__icon}>
          <SendIcon />
        </button>
      </form>
    </div>
  );
};
