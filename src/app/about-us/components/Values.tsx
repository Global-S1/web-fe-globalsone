import { Section } from "@/components/share/section";
import { values } from "@/moc/values.moc";
import { FC } from "react";

interface Prop {
  title: string;
  content: string;
  children: React.ReactNode;
  rotateColor: number;
}

const CardValues: FC<Prop> = ({ title, content, children, rotateColor }) => {
  return (
    <div
      className="h-[18.5rem] max-w-[20rem] rounded-[1.125rem] p-5 flex flex-col justify-center"
      style={{
        background: `linear-gradient(${rotateColor}deg, rgba(217, 217, 217, 0.29) 0%, rgba(115, 115, 115, 0.00) 100%)`,
        border: "0.01rem solid rgba(145,145,145,0.4)",
      }}
    >
      <div className="flex items-center mb-6">
        {children}
        <h3 className="text-[1.42rem]">{title}</h3>
      </div>
      <div>
        <p className="font-futura ">{content}</p>
      </div>
    </div>
  );
};

const Values = () => {
  return (
    <Section styles={{ marginTop: "10rem" }}>
      <div className="w-full flex justify-between">
        <div className="flex flex-col justify-center items-start">
          <h2 className="text-[3.5rem] mb-4">Our Values</h2>
          <p className="max-w-[25rem] font-futura text-xl">
            Our story is one of continuous growth and evolution. We started as a
            small team with big dreams, determined to create a real estate
            platform that transcended the ordinary.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-10">
          {values.map((item, index) => (
            <CardValues
              key={index}
              title={item.title}
              content={item.content}
              rotateColor={index % 2 === 0 ? 270 : 90}
            >
              <item.img />
            </CardValues>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Values;
