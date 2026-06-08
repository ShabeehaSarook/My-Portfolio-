import type { Variants } from "framer-motion";

export const zoomIn: Variants = {
  hidden: { opacity: 0, scale: 0.92, filter: "blur(10px)" },
  show: { opacity: 1, scale: 1, filter: "blur(0px)" },
};

