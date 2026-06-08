"use client";

import dynamic from "next/dynamic";

const AppClient = dynamic(
  () => import("@/components/app/app-client").then((module) => module.AppClient),
  {
    ssr: false,
    loading: () => (
      <div
        suppressHydrationWarning
        className="flex min-h-screen items-center justify-center bg-[#050816] text-white"
      >
        <div
          suppressHydrationWarning
          className="h-14 w-14 animate-spin rounded-full border-2 border-cyan-300/30 border-t-cyan-300"
        />
      </div>
    ),
  },
);

export function AppLoader() {
  return <AppClient />;
}
