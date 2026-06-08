import type { Variants } from "framer-motion";

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 24, filter: "blur(8px)" },
  show: { opacity: 1, x: 0, filter: "blur(0px)" },
};

