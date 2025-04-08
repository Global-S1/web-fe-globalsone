"use client";
import clsx from "clsx";
import s from "./select-country.module.css";
import { useEffect, useState } from "react";
import Image from "next/image";
import { ROOT_PATH } from "@/shared/constants/url";
import listCountries from "@/wp-mock-data/select-countries.json";
import { UseFormRegister, UseFormSetValue } from "react-hook-form";
import { IForm } from "@/app/contact-us/interfaces/contact-form";

interface ICountry {
  country: string;
  code: string;
  iso: string;
}

interface SelectCountryProps {
  register: UseFormRegister<IForm>;
  setValue: UseFormSetValue<IForm>;
}

export const SelectCountry = ({ register, setValue }: SelectCountryProps) => {
  const [isActive, setIsActive] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState({
    country: "Perú",
    code: "51",
    iso: "PE",
  });

  const flagSrc = (code: string) =>
    `${ROOT_PATH ?? ""}/flags/${code.toLowerCase()}.svg`;

  const showModal = () => {
    setIsActive(!isActive);
  };

  const handleCountrySelection = (country: ICountry) => {
    setSelectedCountry(country);
    setIsActive(false);
    setValue("prefix", country.code);
  };

  useEffect(() => {
    setValue("prefix", selectedCountry.code);
  }, []);

  return (
    <div className={s.selectCountry}>
      <div className={s.countrySelected} onClick={showModal}>
        <div className={s.flagItem}>
          <Image
            src={flagSrc(selectedCountry.iso)}
            alt="flag"
            width={20}
            height={20}
          />
        </div>
      </div>
      <div
        className={clsx(s.modalCountries, {
          [s.active]: isActive,
          [s.inactive]: !isActive,
        })}
      >
        {listCountries.map((country) => (
          <div
            key={country.iso}
            className={s.countryItem}
            onClick={() => handleCountrySelection(country)}
          >
            <Image
              src={flagSrc(country.iso)}
              alt={country.country}
              width={20}
              height={20}
            />
            <p>{`${country.country} (+${country.code})`}</p>
          </div>
        ))}
      </div>

      <input
        className={s.inputPhone}
        type="number"
        placeholder="Teléfono"
        {...register("phone", {
          required: "El teléfono es obligatorio.",
          pattern: {
            value: /^[0-9]{6,}$/,
            message: "El teléfono debe tener al menos 6 dígitos.",
          },
        })}
      />
    </div>
  );
};
