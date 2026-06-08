import { cn } from "@/lib/utils";
import { Motion } from "@/components/ui/motion";
import { fadeUp } from "@/lib/animations/fadeUp";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <Motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        align === "left" && "text-left",
        className,
      )}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.55 }}
    >
      <p className="mb-3 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-cyan-300/80 sm:text-xs sm:tracking-[0.45em]">
        {eyebrow}
      </p>
      <h2 className="text-[2rem] font-semibold leading-tight text-white sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base md:text-lg md:leading-8">
          {description}
        </p>
      ) : null}
    </Motion.div>
  );
}
