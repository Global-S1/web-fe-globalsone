import { Section } from "@/shared/components/section";
import { CSSProperties, FC } from "react";
import { steps } from "@/data-mock/steps.moc";

interface Prop {
  title: string;
  content: string;
  style?: CSSProperties;
  index: string | number;
}

export const Step: FC<Prop> = ({ title, content, style, index }) => {
  return (
    <div
      className="flex justify-center items-center px-10 rounded-2xl h-[20rem]"
      style={style}
    >
      <div className="flex">
        <p className="text-2xl">{index}.</p>
        <div>
          <h3 className="text-2xl mb-8 ml-2">{title}</h3>
          <p className="text-lg font-futura">{content}</p>
        </div>
      </div>
    </div>
  );
};

const Steps = () => {
  return (
    <Section 
    // styles={{ marginTop: "8rem" }}
    >
      <div className="flex justify-center items-center">
        {steps.map((item, index) => (
          <Step
            key={index}
            title={item.title}
            content={item.content}
            style={
              index === 1
                ? {
                    background: "#19DBCA",
                    borderBottomLeftRadius: 0,
                    borderBottomRightRadius: 0,
                    color: "black",
                  }
                : {
                    border: "1px solid rgba(251, 251, 251, 0.3)",
                    background:
                      "linear-gradient(180deg, rgba(25,219,202,0.27) 7%, rgba(115,115,115,0) 100%)",
                  }
            }
            index={index + 1}
          />
        ))}
      </div>
    </Section>
  );
};