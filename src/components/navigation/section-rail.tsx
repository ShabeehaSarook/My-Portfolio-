"use client";

import { navItems } from "@/data/portfolio";
import { useActiveSection } from "@/hooks/use-active-section";
import { cn } from "@/lib/utils";

export function SectionRail() {
  const active = useActiveSection(navItems.map((item) => item.href.replace("#", "")));

  return (
    <aside
      aria-label="Section navigation"
      className="fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 2xl:block"
    >
      <div className="rounded-full border border-white/10 bg-[#071022]/55 p-2 shadow-[0_20px_80px_rgba(0,0,0,0.32)] backdrop-blur-2xl">
        <div className="grid gap-2">
          {navItems.map((item) => {
            const id = item.href.replace("#", "");
            const isActive = active === id;

            return (
              <a
                key={item.href}
                href={item.href}
                aria-label={item.label}
                className={cn(
                  "group relative grid h-9 w-9 place-items-center rounded-full border transition duration-300",
                  isActive
                    ? "border-cyan-300/45 bg-cyan-300/18 text-white shadow-[0_0_28px_rgba(0,255,255,0.22)]"
                    : "border-white/10 bg-white/[0.04] text-slate-500 hover:border-cyan-300/30 hover:text-cyan-100",
                )}
              >
                <span
                  className={cn(
                    "h-1.5 w-1.5 rounded-full transition",
                    isActive ? "bg-cyan-200" : "bg-slate-500 group-hover:bg-cyan-200",
                  )}
                />
                <span className="pointer-events-none absolute right-12 scale-95 whitespace-nowrap rounded-full border border-white/10 bg-[#071022]/90 px-3 py-1.5 text-xs text-slate-200 opacity-0 shadow-[0_16px_50px_rgba(0,0,0,0.32)] backdrop-blur-xl transition duration-200 group-hover:scale-100 group-hover:opacity-100">
                  {item.label}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
