import { Section } from "@/shared/components/section";
import { values } from "@/data-mock/values.moc";
import { FC } from "react";
import { CarOurdValues } from "./our-values-card";
import s from "./our-values.module.css";

export const OurValues = ({ ourValuesData }) => {
  console.log("ourValuesData =>", ourValuesData.values);
  return (
    <Section>
      <div className={s.ourValues__container}>
        <div className={s.ourValues__title__container}>
          <h2>{ourValuesData.title}</h2>
        </div>
        <div className={s.ourValues__cards_container}>
          {ourValuesData.values.map((item, index) => {
            return (
              <CarOurdValues
                key={index}
                title={item.label}
                content={item.description}
              >
                {/* <item.img /> */}
              </CarOurdValues>
            );
          })}
        </div>
      </div>
    </Section>
  );
};
