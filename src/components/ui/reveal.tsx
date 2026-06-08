"use client";

import type { PropsWithChildren } from "react";
import { Motion } from "@/components/ui/motion";
import { fadeUp } from "@/lib/animations/fadeUp";

export function Reveal({
  children,
  delay = 0,
}: PropsWithChildren<{ delay?: number }>) {
  return (
    <Motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay }}
    >
      {children}
    </Motion.div>
  );
}
