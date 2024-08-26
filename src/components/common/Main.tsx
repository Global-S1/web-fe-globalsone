import { FC } from "react";

interface Prop {
  children: React.ReactNode;
}

const Main: FC<Prop> = ({ children }) => {
  return <main className="max-w-[1440px] mx-auto relative">{children}</main>;
};

export default Main;
