import * as React from "react";
import { cn } from "@/lib/utils";

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: "default" | "outline";
};

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium tracking-wide",
        variant === "default" &&
          "border-cyan-300/25 bg-cyan-300/10 text-cyan-100",
        variant === "outline" &&
          "border-white/10 bg-white/5 text-slate-200",
        className,
      )}
      {...props}
    />
  );
}
