"use client";

import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useLenisScroll } from "@/hooks/use-lenis-scroll";
import { ToastProvider } from "@/components/ui/toast";
import { Motion } from "@/components/ui/motion";
import { pageTransition } from "@/lib/animations/pageTransition";

function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMove = (e: PointerEvent) => {
      if (!glowRef.current) return;
      const { clientX, clientY } = e;
      glowRef.current.style.transform = `translate(${clientX}px, ${clientY}px)`;
    };

    window.addEventListener("pointermove", handleMove, { passive: true });
    return () => window.removeEventListener("pointermove", handleMove);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <div
        ref={glowRef}
        className="absolute h-[38rem] w-[38rem] -left-[19rem] -top-[19rem] rounded-full bg-cyan-400/12 blur-3xl will-change-transform transition-transform duration-300 ease-out"
      />
    </div>
  );
}


function SpatialBackdrop() {
  return (
    <div
      aria-hidden="true"
      suppressHydrationWarning
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-[0.16] [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:radial-gradient(circle_at_50%_18%,black,transparent_68%)]" />
      <div className="absolute left-[-10%] top-[12%] h-[28rem] w-[28rem] rounded-full bg-cyan-300/10 blur-[90px]" />
      <div className="absolute left-[28%] top-[34%] h-20 w-[52rem] -rotate-6 data-stream opacity-20" />
      <div className="absolute bottom-[8%] right-[-8%] h-[34rem] w-[34rem] rounded-full bg-emerald-300/10 blur-[110px]" />
      <div className="absolute bottom-[32%] left-[45%] h-[24rem] w-[24rem] rounded-full bg-violet-500/8 blur-[110px]" />
      <div className="noise-overlay" />
    </div>
  );
}

function ClientVisualEffects() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setMounted(true));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <SpatialBackdrop />
      <CursorGlow />
    </>
  );
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  useLenisScroll();
  const pathname = usePathname();

  return (
    <ToastProvider>
      <div
        suppressHydrationWarning
        className="relative min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.18),transparent_28%),radial-gradient(circle_at_top_right,rgba(0,255,255,0.14),transparent_24%),linear-gradient(180deg,#050816_0%,#040711_55%,#02040b_100%)] text-white"
      >
        <ClientVisualEffects />
        <AnimatePresence mode="wait">
          <Motion.div
            suppressHydrationWarning
            key={pathname}
            variants={pageTransition}
            initial="initial"
            animate="animate"
            exit="exit"
            className="relative z-10"
          >
            {children}
          </Motion.div>
        </AnimatePresence>
      </div>
    </ToastProvider>
  );
}
