"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Menu, X, ArrowDownToLine, MapPin, Sparkles } from "lucide-react";
import { navItems, site } from "@/data/portfolio";
import { useActiveSection } from "@/hooks/use-active-section";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Motion } from "@/components/ui/motion";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(navItems.map((item) => item.href.replace("#", "")));

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <Motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55 }}
      className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4 md:px-6"
    >
      <nav
        className={cn(
          "relative mx-auto max-w-7xl rounded-[1.5rem] border px-3 py-3 backdrop-blur-2xl transition-all duration-300 sm:px-4 md:px-6",
          scrolled
            ? "border-white/10 bg-[#071022]/78 shadow-[0_16px_80px_rgba(0,0,0,0.3)]"
            : "border-white/5 bg-white/5",
        )}
      >
        <div className="flex items-center justify-between gap-3">
          <a href="#home" className="group inline-flex min-w-0 items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-2xl border border-cyan-300/25 bg-cyan-300/10 text-cyan-200">
              <Sparkles className="h-5 w-5" />
            </span>
            <div className="min-w-0 leading-tight">
              <p className="truncate text-sm font-semibold tracking-[0.22em] text-white sm:tracking-[0.28em]">
                {site.name.split(" ")[0]}
              </p>
              <p className="hidden text-xs text-slate-400 sm:block">{site.role}</p>
            </div>
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
              const isActive = active === item.href.replace("#", "");
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-sm transition",
                    isActive ? "text-white" : "text-slate-400 hover:text-white",
                  )}
                >
                  {item.label}
                  {isActive ? (
                    <Motion.span
                      layoutId="nav-indicator"
                      className="absolute inset-x-3 -bottom-0.5 h-px bg-gradient-to-r from-cyan-300 via-violet-400 to-emerald-300"
                    />
                  ) : null}
                </a>
              );
            })}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <div className="hidden items-center gap-2 rounded-full border border-emerald-300/15 bg-emerald-300/[0.07] px-3 py-2 text-xs text-emerald-100 xl:flex">
              <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_18px_rgba(20,241,149,0.75)]" />
              Available
            </div>
            <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-slate-300 xl:flex">
              <MapPin className="h-3.5 w-3.5 text-cyan-300" />
              {site.location}
            </div>
            <Button variant="secondary" asChild type="button">
              <a href={site.resume} download>
                <ArrowDownToLine className="h-4 w-4" />
                Download CV
              </a>
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="h-11 w-11 lg:hidden"
            onClick={() => setOpen((current) => !current)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        <AnimatePresence>
          {open ? (
            <>
              <Motion.button
                aria-hidden="true"
                type="button"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-40 cursor-default bg-[#02040b]/55 backdrop-blur-sm lg:hidden"
                onClick={() => setOpen(false)}
              />
              <Motion.div
                id="mobile-navigation"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute left-3 right-3 top-[calc(100%+0.75rem)] z-50 rounded-[1.5rem] border border-white/10 bg-[#071022]/95 p-3 shadow-[0_24px_100px_rgba(0,0,0,0.42)] backdrop-blur-2xl lg:hidden"
              >
                <div className="grid gap-1">
                  {navItems.map((item) => {
                    const isActive = active === item.href.replace("#", "");
                    return (
                      <a
                        key={item.href}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "rounded-2xl px-4 py-3 text-sm transition",
                          isActive
                            ? "bg-white/10 text-white"
                            : "text-slate-400 hover:bg-white/5 hover:text-white",
                        )}
                      >
                        {item.label}
                      </a>
                    );
                  })}
                </div>

                <div className="mt-3 grid gap-2 border-t border-white/10 pt-3">
                  <Button variant="secondary" asChild type="button">
                    <a href={site.resume} download onClick={() => setOpen(false)}>
                      <ArrowDownToLine className="h-4 w-4" />
                      Download CV
                    </a>
                  </Button>
                  <div className="grid gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-xs text-slate-300 min-[420px]:flex min-[420px]:items-center min-[420px]:justify-between">
                    <span className="inline-flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_18px_rgba(20,241,149,0.75)]" />
                      Available for projects
                    </span>
                    <span className="text-slate-400">{site.location}</span>
                  </div>
                </div>
              </Motion.div>
            </>
          ) : null}
        </AnimatePresence>
      </nav>
    </Motion.header>
  );
}
