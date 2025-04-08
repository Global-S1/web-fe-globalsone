import { Leave } from "@/assets/leavesComponents/Leave";
import { LeaveBig } from "@/assets/leavesComponents/LeaveBig";
import { ModalWindow } from "@/shared/components/modal-window";
import { Section } from "@/shared/components/section";
import clsx from "clsx";
import s from "./insides.module.css";
import { FC } from "react";
import { Insides } from "@/shared/components/Insides";

interface Prop {
  content: string;
}

export const InsideSection: FC<Prop> = ({ content }) => {
  const title = content;
  return (
    <>
      <Section id="metrics" extendStyle={s.inside__section}>
        <ModalWindow active showGradient>
          <div className={clsx(s.leave_base, s.leave_one)}>
            <Leave />
          </div>
          <div className={s.inside__body__container}>
            <h2 dangerouslySetInnerHTML={{ __html: title }} />
            <Insides size="large" />
          </div>
          <div className={clsx(s.leave_base, s.leave_two)}>
            <LeaveBig />
          </div>
        </ModalWindow>
      </Section>
    </>
  );
};
