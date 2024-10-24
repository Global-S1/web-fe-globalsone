import { motion } from "framer-motion";
import { FC } from "react";

interface IProp {
  toggle: () => void;
  isOpen?: boolean;
}
const Path: FC<any> = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="10"
    stroke="white"
    strokeLinecap="round"
    {...props}
  />
);

export const MenuToggle: FC<IProp> = ({ toggle, isOpen }) => (
  <button onClick={toggle}>
    <svg width="23" height="23" viewBox="0 0 100 100">
      <Path
        variants={{
          closed: { d: "M 15 20 L 100 20" },
          open: { d: "M60 50 L80 30" },
        }}
      />

      <Path
        variants={{
          closed: { d: "M 15 37 L 100 37" },
          open: { d: "M60 50 L80 70" },
        }}
        transition={{ duration: 0.1 }}
      />

      <Path
        variants={{
          closed: { d: "M 15 55 L 100 55" },
          open: { d: "M30 50 L50 30" },
        }}
        transition={{ duration: 0.1 }}
      />

      <Path
        variants={{
          closed: { d: "M 15 73 L 100 73" },
          open: { d: "M30 50 L50 70" },
        }}
      />
    </svg>
  </button>
);
