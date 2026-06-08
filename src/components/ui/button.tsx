import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  variant?: "default" | "secondary" | "ghost" | "outline";
  size?: "default" | "sm" | "lg" | "icon";
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, asChild, children, variant = "default", size = "default", ...props }, ref) => {
    const classes = cn(
      "inline-flex items-center justify-center gap-2 rounded-full border text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 disabled:pointer-events-none disabled:opacity-50",
      variant === "default" &&
        "border-cyan-300/35 bg-[linear-gradient(135deg,rgba(0,255,255,0.22),rgba(20,241,149,0.12),rgba(124,58,237,0.2))] text-white shadow-[0_0_34px_rgba(0,255,255,0.14)] hover:-translate-y-0.5 hover:border-cyan-300/70 hover:shadow-[0_0_44px_rgba(0,255,255,0.2)]",
      variant === "secondary" &&
        "border-white/10 bg-white/[0.07] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] hover:bg-white/10 hover:border-white/20",
      variant === "ghost" &&
        "border-transparent bg-transparent text-slate-300 hover:bg-white/5 hover:text-white",
      variant === "outline" &&
        "border-white/10 bg-transparent text-white hover:bg-white/5",
      size === "default" && "h-11 px-5",
      size === "sm" && "h-9 px-4 text-xs",
      size === "lg" && "h-12 px-6 text-sm",
      size === "icon" && "h-11 w-11 p-0",
      className,
    );

    if (asChild) {
      return (
        <Slot ref={ref} className={classes}>
          {children}
        </Slot>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  },
);
Button.displayName = "Button";
