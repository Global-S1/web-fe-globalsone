import { FC } from "react";

interface Prop {
  children: React.ReactNode;
  styles?: any;
}

const Section: FC<Prop> = ({ children, styles }) => {
  return (
    <section
      className="container relative flex flex-col mx-auto justify-center items-center  max-w-[1200px]"
      style={styles}
    >
      {children}
    </section>
  );
};

export default Section;
