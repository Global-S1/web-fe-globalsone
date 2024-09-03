import { FC } from "react";

interface Prop {
  children: React.ReactNode;
  styles?: React.CSSProperties;
}

const Section: FC<Prop> = ({ children, styles }) => {
  return (
    <section
      className="container relative flex flex-col mx-auto justify-center items-center  max-w-[1240px] px-[16px] xl:px-0"
      style={styles}
    >
      {children}
    </section>
  );
};

export default Section;
