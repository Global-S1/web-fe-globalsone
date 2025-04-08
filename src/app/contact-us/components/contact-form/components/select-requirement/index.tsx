import clsx from "clsx";
import { useState } from "react";
import { UseFormRegister, UseFormSetValue, FieldErrors } from "react-hook-form";
import { IForm } from "@/app/contact-us/interfaces/contact-form";
import s from "./select-requirement.module.css";

interface SelectRequirementProps {
  register: UseFormRegister<IForm>;
  setValue: UseFormSetValue<IForm>;
  errors: FieldErrors<IForm>;
  services: string[];
}

export const SelectRequirement = ({
  register,
  setValue,
  errors,
  services,
}: SelectRequirementProps) => {
  const [isActive, setIsActive] = useState(false);
  const [requirement, setRequirement] = useState<string | null>(null);

  const handleRequirementSelection = (req: string) => {
    setRequirement(req);
    setValue("requirements", req);
    setIsActive(false);
  };

  const showModal = () => {
    setIsActive(!isActive);
  };

  register("requirements", { required: "El tipo de proyecto es obligatorio." });

  return (
    <div className={s.selectRequirement}>
      <div
        className={clsx(s.requirementSelected, {
          [s.error]: errors.requirements,
        })}
        onClick={showModal}
      >
        <p>{requirement ?? "Selecciona tipo de proyecto"}</p>
      </div>

      <div
        className={clsx(s.modal, {
          [s.active]: isActive,
          [s.inactive]: !isActive,
        })}
      >
        {services.map((service) => (
          <div
            key={service}
            className={s.countryItem}
            onClick={() => handleRequirementSelection(service)}
          >
            <p>{`${service}`}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
