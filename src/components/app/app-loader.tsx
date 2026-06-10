"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { Motion } from "@/components/ui/motion";

const AppClient = dynamic(
  () => import("@/components/app/app-client").then((module) => module.AppClient),
  {
    ssr: false,
    loading: () => <LoadingScreen />,
  },
);

function LoadingScreen() {
  return (
    <div
      suppressHydrationWarning
      className="flex min-h-screen flex-col items-center justify-center bg-[#050816] text-white"
    >
      <div className="relative h-20 w-20">
        <div className="absolute inset-0 animate-ping rounded-full bg-cyan-300/20" />
        <div className="absolute inset-0 animate-pulse rounded-full border-2 border-cyan-300/30 border-t-cyan-300" />
        <div className="absolute inset-2 animate-spin rounded-full border-b-2 border-violet-400/50" />
      </div>
      <Motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-6 font-mono text-xs uppercase tracking-[0.4em] text-cyan-100/60"
      >
        Engineered for Clarity
      </Motion.p>
    </div>
  );
}

export function AppLoader() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Artificial small delay to ensure hydration is solid
    const timer = setTimeout(() => setReady(true), 200);
    return () => clearTimeout(timer);
  }, []);

  if (!ready) return <LoadingScreen />;

  return <AppClient />;
}

